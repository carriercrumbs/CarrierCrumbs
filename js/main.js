// Document on ready
document.addEventListener("DOMContentLoaded", function() {

    // DOM querySelectors
    var toggleItem = document.querySelectorAll('.navigation__item');
    var getSliderThumbnails = document.querySelectorAll('.slider__thumbnail--img');
    var DOMString = {
        getNavDiv: document.querySelector('.navigation'),
        getNav: document.querySelector('.navigation__nav'),
        getNavList: document.querySelector('.navigation__list'),
        getNavBackground: document.querySelector('.navigation__background'),
        getNavIcon: document.querySelector('.navigation__toggle--icon'),
        getDirectorBox: document.querySelector('.director-box'),
        getCurrentMusicVideoHeading: document.querySelector('.current-video__heading-box'),
        getCurrentMusicVideoTitle: document.querySelector('.current-video__heading--title'),
        getCurrentMusicVideoArtist: document.querySelector('.current-video__heading--artist'),
        getCurrentMusicVideo: document.querySelector('.current-video__video'),
        getSlider: document.querySelector('.slider'),
        getCurrentSlider: document.querySelector('.slick-current'),
        getAbout: document.querySelector('.about-box'),
        getFeatureBox: document.querySelector('.feature-box'),
        getContactForm: document.querySelector('.form'),
        getSocialMedia: document.querySelector('.media'),
        instagram: document.getElementById('instagram'),
        twitter: document.getElementById('twitter'),
        youtube:document.getElementById('youtube')
    };

    // Toggles Navigation Icon
    function toggleNavigationIcon() {
        DOMString.getNavIcon.setAttribute("class", "fas fa-times navigation__toggle--icon");
        DOMString.getNavIcon.removeAttribute("fas fa-bars navigation__toggle--icon");
    }

    // Removes Navigation
    function removeNavigation() {
        DOMString.getNavIcon.setAttribute("class", "fas fa-times navigation__toggle--icon");
        DOMString.getNavIcon.removeAttribute("fas fa-bars navigation__toggle--icon");
        DOMString.getNavBackground.classList.add('remove-nav');
    }

    // When Mobile Nav Icon is Clicked
    DOMString.getNavIcon.addEventListener('click', function() {
        DOMString.getNav.classList.toggle('navigation__active');
        if (DOMString.getNavIcon.classList.contains('fa-bars')) {
            toggleNavigationIcon();

        } else {
            DOMString.getNavIcon.setAttribute("class", "fas fa-bars navigation__toggle--icon");
            DOMString.getNavIcon.removeAttribute('fas fa-times navigation__toggle--icon');
        }
    });

    // Removes Nav Background When Item Clicked
    toggleItem.forEach(function (toggleItem) {
        toggleItem.addEventListener('click', function() {
            DOMString.getNav.classList.remove('navigation__active');
            if (DOMString.getNavIcon.classList.contains('fa-bars')) {
                removeNavigation();

            } else {
                DOMString.getNavIcon.setAttribute("class", "fas fa-bars navigation__toggle--icon");
                DOMString.getNavIcon.removeAttribute('fas fa-times navigation__toggle--icon');
            }
        })
    });
    
    // Window Scroll Event Listener
    window.addEventListener('scroll', function() {

        // Navigation
        if (window.pageYOffset > 600) {
            DOMString.getNavDiv.style.backgroundColor = '#000';
            DOMString.getNavList.style.fontSize = '1.7rem';

        } else {
            DOMString.getNavDiv.style.removeProperty("background-color");
            DOMString.getNavList.style.removeProperty("font-size");
        }
        // Directors Reel Section
        if (window.pageYOffset > 525) {
            DOMString.getDirectorBox.classList.add('fadeUp');
        }
        // Music Video Section
        if(window.pageYOffset > 1250) {
            DOMString.getCurrentMusicVideo.classList.add('fadeUp');
            DOMString.getSlider.classList.add('fadeUp');
        }
        // About Section
        if (window.pageYOffset > 2300) {
            DOMString.getAbout.classList.add('fadeUp');
        }
        // Features Section
        if (window.pageYOffset > 2900) {
            DOMString.getFeatureBox.classList.add('fadeUp');
        }

        // Booking Section
        if (window.pageYOffset > 3500) {
            DOMString.getContactForm.classList.add('fadeUp');
            DOMString.getSocialMedia.classList.add('fadeUp');
        }
        // Social Media Section
        if (window.pageYOffset > 4200) {
            DOMString.instagram.classList.add('fadeLeft-social-1');
            DOMString.twitter.classList.add('fadeLeft-social-2');
            DOMString.youtube.classList.add('fadeLeft-social-3');
        }
    });
 
    // Gets Current Music Video Title & Artist
    var getCurrentSlideSrc = DOMString.getCurrentSlider.childNodes[1].childNodes[1].dataset.src;
    var getCurrentSlideStyle = DOMString.getCurrentSlider.childNodes[1].childNodes[1];

    // Gets Clicked Music Video Title & Artist
    var musicInfo = getCurrentSlideStyle.alt;
    var splitInfo = musicInfo.split('_');

    // Displays Current Video Information
    DOMString.getCurrentMusicVideoTitle.textContent = splitInfo[0];
    DOMString.getCurrentMusicVideoArtist.textContent = splitInfo[1];
    DOMString.getCurrentMusicVideo.src = getCurrentSlideSrc;

    // When a Thumbnail is Clicked
    getSliderThumbnails.forEach(function (getSliderThumbnails) {
        getSliderThumbnails.addEventListener('click', imgClick)
    });

    // Updates Current Video Information with the one that is Clicked
    function imgClick(e) {
        musicInfo = e.target.alt;
        splitInfo = musicInfo.split('_');
        DOMString.getCurrentMusicVideoTitle.textContent = splitInfo[0];
        DOMString.getCurrentMusicVideoArtist.textContent = splitInfo[1];
        DOMString.getCurrentMusicVideo.src = e.target.dataset.src;

        DOMString.getCurrentMusicVideoHeading.classList.add('fadeIn');
        setTimeout(() => DOMString.getCurrentMusicVideoHeading.classList.remove('fadeIn'), 500);
    }
});

// Scroll to Element
$("a.scroll").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ 
        scrollTop: $($(this).attr("href")).offset().top
    }, 1000);
});