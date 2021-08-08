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
});