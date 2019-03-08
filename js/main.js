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
        musicVidSection: document.getElementById('music-vid'),
        musicVidMobile: document.getElementById('music-vid-mobile'),
        aboutImg: document.getElementById('about-img'),
        aboutBox1: document.getElementById('about-box-1'),
        aboutBox2: document.getElementById('about-box-2'),
        aboutBox3: document.getElementById('about-box-3'),
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
            animation.musicVidSection.style.animation = 'moveInRight';
            animation.musicVidSection.style.animationDuration = '.5s';
            animation.musicVidSection.style.opacity = '1';
            // Mobile Music Video Section
            animation.musicVidMobile.style.animation = 'moveInRight';
            animation.musicVidMobile.style.animationDuration = '.5s';
            animation.musicVidMobile.style.opacity = '1';
        }

        // About Section
        if (window.pageYOffset > 2000) {
            // About Image
            animation.aboutImg.style.animation = 'moveInBottom';
            animation.aboutImg.style.animationDuration = '.5s';
            animation.aboutImg.style.opacity = '1';
        }

        // About Section Yellow Boxes
        if (window.pageYOffset > 2300) {
            // Box 1
            animation.aboutBox1.style.animation = 'moveInBottom';
            animation.aboutBox1.style.animationDuration = '.5s';
            animation.aboutBox1.style.opacity = '1 !important';
            // Box 2
            animation.aboutBox2.style.animation = 'moveInBottom';
            animation.aboutBox2.style.animationDuration = '1s';
            animation.aboutBox2.style.opacity = '1 !important';
            // Box 3
            animation.aboutBox3.style.animation = 'moveInBottom';
            animation.aboutBox3.style.animationDuration = '1.5s';
            animation.aboutBox3.style.opacity = '1 !important';
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
            navigation.background.style.right = '35rem';
            navigation.background.style.transition = 'all .6s';
          } else {
            navigation.icon.setAttribute("class", "fas fa-bars navigation__toggle--icon");
            navigation.icon.removeAttribute('fas fa-times navigation__toggle--icon');
            navigation.background.style.right = '-5rem';
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

    // Scroll to Element
    $("a.scroll").click(function (event) {
        event.preventDefault();

        $("html, body").animate({ 
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
    });

    // Carousel Function
    var slide = $('.carousel__main');
    var slideTotal = slide.length - 1;
    var slideCurrent = -1;
  
    // Initializes Slide Functions
    function slideInitial() {
        slide.addClass('proactivede');  

        setTimeout(function() {
            slideRight();
        }, 500);
    }
  
    // Right Slide Function
    function slideRight() {
        if (slideCurrent < slideTotal) {
            slideCurrent++;
        } else {
            slideCurrent = 0;
        }

        if (slideCurrent > 0) {
            var preactiveSlide = slide.eq(slideCurrent - 1);
        } else {
            var preactiveSlide = slide.eq(slideTotal);
        }
        
        var activeSlide = slide.eq(slideCurrent);
        
        if (slideCurrent < slideTotal) {
            var proactiveSlide = slide.eq(slideCurrent + 1);
        } else {
            var proactiveSlide = slide.eq(0);
        }

        slide.each(function() {
        var thisSlide = $(this);
            if (thisSlide.hasClass('preactivede')) {
                thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
            }
            if (thisSlide.hasClass('preactive')) {
                thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
            }
        });
        preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
        activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
        proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
    }

    // Left Slide Function
    function slideLeft() {
        if (slideCurrent > 0) {
            slideCurrent--;
        } else {
            slideCurrent = slideTotal;
        }

        if (slideCurrent < slideTotal) {
            var proactiveSlide = slide.eq(slideCurrent + 1);
        } else {
            var proactiveSlide = slide.eq(0);
        }
        var activeSlide = slide.eq(slideCurrent);
        if (slideCurrent > 0) {
            var preactiveSlide = slide.eq(slideCurrent - 1);
        } else {
            var preactiveSlide = slide.eq(slideTotal);
        }
        slide.each(function() {
            var thisSlide = $(this);
        if (thisSlide.hasClass('proactivede')) {
            thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
        }
        if (thisSlide.hasClass('proactive')) {
            thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
        }
        });
        preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
        activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
        proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
    }
  
    // Carousel Controls
    var left = $('.carousel__left');
    var right = $('.carousel__right');
    left.on('click', function() {
        slideLeft();
    });
    right.on('click', function() {
        slideRight();
    });
    slideInitial();
});