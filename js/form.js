(function() {
    function validEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }

    function validateHuman(honeypot) {
        if (honeypot) {  //if hidden form filled up
            console.log("Robot Detected!");
            return true;
        } else {
            console.log("Welcome Human!");
        }
    }

    // get all data in form and return object
    function getFormData(form) {
        var elements = form.elements;
        var fields = Object.keys(elements).filter(function(k) {
            return (elements[k].name !== "honeypot");
        }).map(function(k) {
            if(elements[k].name !== undefined) {
            return elements[k].name;
            // special case for Edge's html collection
            } else if(elements[k].length > 0){
                return elements[k].item(0).name;
            }
        }).filter(function(item, pos, self) {
            return self.indexOf(item) == pos && item;
        });
        var formData = {};
        fields.forEach(function(name){
            var element = elements[name];
            
            // singular form elements just have one value
            formData[name] = element.value;

            // when our element has multiple items, get their values
            if (element.length) {
                var data = [];
                for (var i = 0; i < element.length; i++) {
                    var item = element.item(i);
                    if (item.checked || item.selected) {
                        data.push(item.value);
                    }
                }
                formData[name] = data.join(', ');
            }
        });
        // add form-specific values into the data
        formData.formDataNameOrder = JSON.stringify(fields);
        formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
        formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default
        console.log(formData);
        return formData;
    }



    // Form querySelectors
    var getNameValue = document.getElementById('name');
    var getPhoneValue = document.getElementById('phone');
    var getEmailValue = document.getElementById('email');
    var getMessageValue = document.getElementById('message');
    var getFormSubmitted = document.querySelector(".form__submitted");
    var getFormSubmittedContent = document.querySelector(".form__submitted-content");

    function handleFormSubmit(event) {
        event.preventDefault();
        var form = event.target;
        // gets the values submitted in the form
        var data = getFormData(form);

        //if form is filled, form will not be submitted
        // if (validateHuman(data.honeypot)) {  
        //     return false;
        // }

        // Displays Loading Spinner
        getFormSubmittedContent.style.display = "none";     
        getFormSubmitted.classList.add("loading");

        // Displays Content When a Form is Submitted
        if (getFormSubmitted) {
            getFormSubmitted.style.display = "block";
        }

        // If email isn't validated or none entered, throw an error
        if( data.email && !validEmail(data.email) ) {
            var invalidEmail = form.querySelector(".form__invalid");
            if (invalidEmail) {
                invalidEmail.style.display = "block";
                return false;
            }

        // If valid, prepare to send Email
        } else {
            // Disables Submit Button
            disableAllButtons(form);
            var url = form.action;
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            // xhr.withCredentials = true;
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            // Once ready, send Email
            xhr.onreadystatechange = function() {
                console.log('Message Sent!')
                getFormSubmitted.classList.remove("loading");

                // Gets Form Submitted Content and Displays it
                getFormSubmittedContent.style.display = "block";
                getFormSubmittedContent.classList.add('fadeIn')

                // Clears Input Fields
                getNameValue.value = '';
                getPhoneValue.value = '';
                getEmailValue.value = '';
                getMessageValue.value = '';

                return;
            };
            // url encode form data for sending as post data
            var encoded = Object.keys(data).map(function(k) {
                return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
            }).join('&');
            xhr.send(encoded);
        }
    }
  
    function loaded() {
        // bind to the submit event of our form
        var forms = document.querySelectorAll("form.form");
        for (var i = 0; i < forms.length; i++) {
            forms[i].addEventListener("submit", handleFormSubmit, false);
        }
    };
    document.addEventListener("DOMContentLoaded", loaded, false);

    function disableAllButtons(form) {
        var buttons = form.querySelectorAll("button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
    }

    var getFormSubmittedButton = document.querySelector('.form__submitted-confirm--btn')
    function formSubmitButton() {
        getFormSubmitted.style.display = "none";

        // Enables buttons again
        var buttons = document.querySelectorAll("button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
        }
    }
    getFormSubmittedButton.addEventListener('click', formSubmitButton)
})();