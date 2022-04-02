//arrow-button scroll to top
let upButton = document.querySelector('.up-button');

window.onscroll = function () {
    if (window.pageYOffset > 400) {
        upButton.classList.add('shown');
    } else {
        upButton.classList.remove('shown');
    }

};

upButton.onclick = function () {
    window.scrollTo(0, 0);
    document.querySelectorAll('.page-nav a').forEach((el) => {
        el.classList.remove('active');
    });
};

//burger-menu
let navMain = document.querySelector('.page-nav__container');
let navToggle = document.querySelector('.page-nav__toggle');
let menuItem = document.querySelectorAll('.menu-list__item');

navMain.classList.remove('page-nav__container--nojs');

navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('page-nav__container--closed')) {
        navMain.classList.remove('page-nav__container--closed');
        navMain.classList.add('page-nav__container--opened');
    } else {
        navMain.classList.add('page-nav__container--closed');
        navMain.classList.remove('page-nav__container--opened');
    }
});

menuItem.forEach(el => {
    el.addEventListener('click', function () {
        navMain.classList.add('page-nav__container--closed');
        navMain.classList.remove('page-nav__container--opened');
    })
});


//menu scrolling

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    if (window.innerWidth > 768) {
        document.querySelectorAll('.section').forEach((el, i) => {
            if (el.offsetTop - document.querySelector('.page-nav').clientHeight <= scrollDistance) {
                document.querySelectorAll('.page-nav a').forEach((el) => {
                    if (el.classList.contains('active')) {
                        el.classList.remove('active');
                    }
                });

                document.querySelectorAll('.page-nav li')[i].querySelector('a').classList.add('active');
            }
        });
    }
    if (scrollDistance < 500) {
        document.querySelectorAll('.page-nav a').forEach((el) => {
            if (el.classList.contains('active')) {
                el.classList.remove('active');
            }
        });
    }
});

//form validation

let form = document.querySelector('.form')
let email = form.querySelector('.form__email');
let submit = form.querySelector('.form__submit');

let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

email.addEventListener('input', () => {
    const invalidEmail = [];
    email.setCustomValidity('');

    if (email.value === 0) {
        return;
    }

    const isNotPattern = emailPattern.test(email.value) === false;
    if (isNotPattern) {
        invalidEmail.push('E-mail уведзены няправільна / E-mail введен неверно');
        email.style.borderColor = 'red';
    }

    if (invalidEmail.length > 0) {
        email.setCustomValidity(invalidEmail.join('. \n'));
        email.style.borderColor = 'red';
    } else {
        email.style.borderColor = '#28a745';
    }

    email.reportValidity();
});

//yt-player

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}
