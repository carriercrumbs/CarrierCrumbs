// Document on ready
document.addEventListener("DOMContentLoaded", function() {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);  
    }

    // NAVIGATION OBJECT & VARIABLES
    var toggleItem = document.querySelectorAll('.navigation__item');
    var navigation = {
        div: document.querySelector('.navigation'),
        nav: document.querySelector('.navigation__nav'),
        list: document.querySelector('.navigation__list'),
        background: document.querySelector('.navigation__background'),
        icon: document.querySelector('.navigation__toggle--icon')
    };

    // ANIMATION OBJECT
    var animation = {
        directorVideo: document.getElementById('director-vid'),
        directorText: document.getElementById('director-text'),
        currentVideo: document.querySelector('.slides__current-video'),
        videoThumbnails: document.getElementById('video-thumbnails'),
        aboutImg: document.getElementById('about-img'),
        featureBox1: document.getElementById('feature-box-1'),
        featureBox2: document.getElementById('feature-box-2'),
        featureBox3: document.getElementById('feature-box-3'),
        instagram: document.getElementById('instagram'),
        twitter: document.getElementById('twitter'),
        email: document.getElementById('email'),
        youtube:document.getElementById('youtube')
    };

    // Window Scroll Event Listener
    window.addEventListener('scroll', function() {
        
        if (window.pageYOffset > 710) {
            navigation.div.style.backgroundColor = '#000';
            navigation.nav.style.marginBottom = '1.5rem';
            navigation.list.style.marginTop = '1rem';
            navigation.list.style.fontSize = '1.7rem';
        } else {
            navigation.div.style.removeProperty("background-color");
            navigation.nav.style.removeProperty("margin-bottom");
            navigation.list.style.removeProperty("margin-top");
            navigation.list.style.removeProperty("font-size");
        }

        // Directors Reel Section
        if (window.pageYOffset > 525) {
            // Director Video
            animation.directorVideo.style.animation = 'moveInLeft';
            animation.directorVideo.style.animationDuration = '.5s';
            animation.directorVideo.style.opacity = '1';
            // Director Text
            animation.directorText.style.animation = 'moveInLeft';
            animation.directorText.style.animationDuration = '.5s';
            animation.directorText.style.opacity = '1';
        }

        // Music Video Section
        if(window.pageYOffset > 1250) {
            // Carousel
            animation.currentVideo.style.animation = 'moveInRight';
            animation.currentVideo.style.animationDuration = '.5s';
            animation.currentVideo.style.opacity = '1';

            // Check this animation later
            animation.videoThumbnails.style.animation = 'fade';
            animation.videoThumbnails.style.animationDuration = '.5s';
            animation.videoThumbnails.style.opacity = '1';

        }

        // About Section
        if (window.pageYOffset > 2000) {
            // About Image
            animation.aboutImg.style.animation = 'fadeUp';
            animation.aboutImg.style.animationDuration = '.5s';
            animation.aboutImg.style.opacity = '1';
        }

        // About Section Yellow Boxes
        if (window.pageYOffset > 2300) {
            // Box 1
            animation.featureBox1.style.animation = 'fadeUp';
            animation.featureBox1.style.animationDuration = '.5s';
            animation.featureBox1.style.opacity = '1 !important';
            // Box 2
            animation.featureBox2.style.animation = 'fadeUp';
            animation.featureBox2.style.animationDuration = '1s';
            animation.featureBox2.style.opacity = '1 !important';
            // Box 3
            animation.featureBox3.style.animation = 'fadeUp';
            animation.featureBox3.style.animationDuration = '1.5s';
            animation.featureBox3.style.opacity = '1 !important';
        }

        // Contact Section
        if (window.pageYOffset > 3200) {
            // Instagram Icon
            animation.instagram.style.animation = 'moveInLeft';
            animation.instagram.style.animationDuration = '.2s';
            animation.instagram.style.opacity = '1';
            // Twitter Icon
            animation.twitter.style.animation = 'moveInLeft';
            animation.twitter.style.animationDuration = '.4s';
            animation.twitter.style.opacity = '1';
            // Email Icon
            animation.email.style.animation = 'moveInLeft';
            animation.email.style.animationDuration = '.6s';
            animation.email.style.opacity = '1';
            // Youtube Icon
            animation.youtube.style.animation = 'moveInLeft';
            animation.youtube.style.animationDuration = '.8s';
            animation.youtube.style.opacity = '1';
        }
    });

    // When Mobile Nav is Clicked
    navigation.icon.addEventListener('click', function() {
        navigation.nav.classList.toggle('navigation__active');
        
        // Toggles Nav Icon
        if (navigation.icon.classList.contains('fa-bars')) {
            navigation.icon.setAttribute("class", "fas fa-times navigation__toggle--icon");
            navigation.icon.removeAttribute("fas fa-bars navigation__toggle--icon");
          } else {
            navigation.icon.setAttribute("class", "fas fa-bars navigation__toggle--icon");
            navigation.icon.removeAttribute('fas fa-times navigation__toggle--icon');
        }
    });

    // Removes Nav Background When Item Clicked
    toggleItem.forEach(function (toggleItem) {
        toggleItem.addEventListener('click', function() {
            navigation.nav.classList.remove('navigation__active');

            // Toggles Nav Icon
            if (navigation.icon.classList.contains('fa-bars')) {
                navigation.icon.setAttribute("class", "fas fa-times navigation__toggle--icon");
                navigation.icon.removeAttribute("fas fa-bars navigation__toggle--icon");
                navigation.background.style.right = '90rem';
                navigation.background.style.transition = 'all .5s';
            } else {
                navigation.icon.setAttribute("class", "fas fa-bars navigation__toggle--icon");
                navigation.icon.removeAttribute('fas fa-times navigation__toggle--icon');
                navigation.background.style.right = '-5rem';
            }
        })
	});

    // Slideshow
    const current = document.getElementById('current');
    const thumbnail = document.querySelectorAll('.slides__thumbnails--img');
    const videoTitle = document.getElementById('caption')
    const borderColor = '#EFE06E solid 2px';
    const resetBorderColor = 'transparent solid 2px';
    
    // Set first img title, thumbnail & border color
    videoTitle.textContent = thumbnail[0].alt;
    current.src = thumbnail[0].dataset.src;
    thumbnail[0].style.border = borderColor;

    // Whenever a thumbnail is clicked
    thumbnail.forEach(function (thumbnail) {
        thumbnail.addEventListener('click', imgClick)
	});

    function imgClick(e) {
        // Displays Video Title
        videoTitle.textContent = e.target.alt;
        // Adds fadeIn Class, Remove after .5 Seconds
        videoTitle.classList.add('fade-in');
        setTimeout(() => videoTitle.classList.remove('fade-in'), 500);

        // Reset Border Color
        thumbnail.forEach(thumbnail => (thumbnail.style.border = resetBorderColor));

        // Change current image to src of clicked image
        current.src = e.target.dataset.src;

        // Change the opacity to opacity var
        e.target.style.border = borderColor;

        // Adds Slide Left Class, Remove after .5 Seconds
        current.classList.add('slide-left');
        setTimeout(() => current.classList.remove('slide-left'), 500);
    }

    // Current Slide
    var slideIndex = 1;

    // Displays Slides
    showSlides(slideIndex);

    // Goes To Previous Slide
    function minusSlides() {
        showSlides(slideIndex -= 1);
    }
    var prevSlide = document.querySelector('.slides__prev');
    prevSlide.addEventListener('click', minusSlides);

    // Goes To Next Slide
    function plusSlides() {
        showSlides(slideIndex += 1);
    }
    var nextSlide = document.querySelector('.slides__next');
    nextSlide.addEventListener('click', plusSlides);

    // Gets Slides
    function showSlides(cur) {
        var dots;
        var i;
        var slides = document.getElementsByClassName("slides__current");
        dots = document.getElementsByClassName("slides__dot");

        if (cur > slides.length) {
            slideIndex = 1;
        };

        if (cur < 1) {
            slideIndex = slides.length;
        };

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        };

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" slides__active", "");
        };

        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " slides__active";
    }

    // Keeps Track of Current Slide for Dots
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    // Dots On Click
    var firstDot = document.getElementById('1');
    firstDot.addEventListener('click', function() {
        currentSlide(1)
    })

    var secondDot = document.getElementById('2');
    secondDot.addEventListener('click', function() {
        currentSlide(2)
    })

    // Scroll to Element
    $("a.scroll").click(function (event) {
        event.preventDefault();

        $("html, body").animate({ 
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
    });
});