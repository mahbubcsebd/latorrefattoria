$(document).ready(function () {
    //magnific popup
    $('.photo-click').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    // scroll to top
    $('body').materialScrollTop();

    //owl carousel
    $('.owl-carousel').owlCarousel({
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
});