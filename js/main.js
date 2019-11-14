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

    // Toggles Navigation Icon
    function toggleNavigationIcon() {
        navigation.icon.setAttribute("class", "fas fa-times navigation__toggle--icon");
        navigation.icon.removeAttribute("fas fa-bars navigation__toggle--icon");
    }

    // Removes Navigation
    function removeNavigation() {
        navigation.icon.setAttribute("class", "fas fa-times navigation__toggle--icon");
        navigation.icon.removeAttribute("fas fa-bars navigation__toggle--icon");
        navigation.background.style.right = '90rem';
        navigation.background.style.transition = 'all .5s';
    }

    // When Mobile Nav Icon is Clicked
    navigation.icon.addEventListener('click', function() {
        navigation.nav.classList.toggle('navigation__active');
        if (navigation.icon.classList.contains('fa-bars')) {
            toggleNavigationIcon();

        } else {
            navigation.icon.setAttribute("class", "fas fa-bars navigation__toggle--icon");
            navigation.icon.removeAttribute('fas fa-times navigation__toggle--icon');
        }
    });

    // Removes Nav Background When Item Clicked
    toggleItem.forEach(function (toggleItem) {
        toggleItem.addEventListener('click', function() {
            navigation.nav.classList.remove('navigation__active');
            if (navigation.icon.classList.contains('fa-bars')) {
                removeNavigation();

            } else {
                navigation.icon.setAttribute("class", "fas fa-bars navigation__toggle--icon");
                navigation.icon.removeAttribute('fas fa-times navigation__toggle--icon');
            }
        })
    });
    
    // Strings
    var getSliderThumbnails = document.querySelectorAll('.slider__thumbnail--img');

    var DOMString = {
        getDirectorBox: document.querySelector('.director-box'),
        getCurrentMusicVideoHeading: document.querySelector('.current-video__heading-box'),
        getCurrentMusicVideoTitle: document.querySelector('.current-video__heading--title'),
        getCurrentMusicVideoArtist: document.querySelector('.current-video__heading--artist'),
        getCurrentMusicVideo: document.querySelector('.current-video__video'),
        getSlider: document.querySelector('.slider'),
        getCurrentSlider: document.querySelector('.slick-current'),
        getAbout: document.querySelector('.about-box'),
        getFeatureBox: document.querySelector('.feature-box'),
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
            DOMString.getDirectorBox.classList.add('fadeLeft-directors-section');
        }

        // Music Video Section
        if(window.pageYOffset > 1250) {
            DOMString.getCurrentMusicVideo.classList.add('fadeRight-MV')
            DOMString.getSlider.classList.add('fadeRight-MV')
        }

        // About Section
        if (window.pageYOffset > 2300) {
            DOMString.getAbout.classList.add('fadeUp-about')
        }

        // About Section Yellow Boxes
        if (window.pageYOffset > 2900) {
            DOMString.getFeatureBox.classList.add('fadeUp-feature-box')
        }

        // Contact Section
        if (window.pageYOffset > 3200) {
            DOMString.instagram.classList.add('fadeLeft-social-1')
            DOMString.twitter.classList.add('fadeLeft-social-2')
            DOMString.email.classList.add('fadeLeft-social-3')
            DOMString.youtube.classList.add('fadeLeft-social-4')
        }
    });


    // Slider
    // Gets Current Music Video Title & Artist
    var getCurrentSlideSrc = DOMString.getCurrentSlider.childNodes[1].childNodes[1].dataset.src;
    var getCurrentSlideStyle = DOMString.getCurrentSlider.childNodes[1].childNodes[1];

    // Gets Clicked Music Video Title & Artist
    var musicInfo = getCurrentSlideStyle.alt;
    var splitInfo = musicInfo.split('_');

    DOMString.getCurrentMusicVideoTitle.textContent = splitInfo[0];
    DOMString.getCurrentMusicVideoArtist.textContent = splitInfo[1];

    DOMString.getCurrentMusicVideo.src = getCurrentSlideSrc;

    // When a Thumbnail is Clicked
    getSliderThumbnails.forEach(function (getSliderThumbnails) {
        getSliderThumbnails.addEventListener('click', imgClick)
    });

    function imgClick(e) {
        musicInfo = e.target.alt;
        splitInfo = musicInfo.split('_');

        DOMString.getCurrentMusicVideoTitle.textContent = splitInfo[0];
        DOMString.getCurrentMusicVideoArtist.textContent = splitInfo[1];
        
        // Adds fadeIn Class, Remove after .5 Seconds
        DOMString.getCurrentMusicVideoHeading.classList.add('fadeIn');
        setTimeout(() => DOMString.getCurrentMusicVideoHeading.classList.remove('fadeIn'), 500);

        // Change current Music Video to src of clicked image
        DOMString.getCurrentMusicVideo.src = e.target.dataset.src;
    }
});

// Scroll to Element
$("a.scroll").click(function (event) {
    event.preventDefault();

    $("html, body").animate({ 
        scrollTop: $($(this).attr("href")).offset().top
    }, 1000);
});