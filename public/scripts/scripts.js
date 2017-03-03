$(function () {
    'use strict';
// =============================================================== preloader
    (function () {
        $(window).on("load", function () {
            $('#pre-status').fadeOut();
            $('#st-preloader').delay(350).fadeOut('slow');
        });
    }());

// =============================================================== index
    $(document).ready(function () {
        $("#mainSlider").lightSlider();
    });

// =============================================================== apartmentsView
    $(document).ready(function () {
        $('#content-slider').lightSlider({
            item: 3,
            loop: true,
            slideMargin: 0,
            enableDrag: false,
            currentPagerPosition: 'left',
            onSliderLoad: function (el) {
                el.lightGallery({
                    selector: '#content-slider .lslide'
                });
            }
        });
    });
// =============================================================== contact form
    $("#contactus-form").submit(function (event) {
        event.preventDefault();
        $.ajax({
            url: "/api",
            type: "POST",
            data: JSON.stringify({
                name: $("#contact-form-name").val(),
                email: $("#contact-form-email").val(),
                phone: $("#contact-form-tel").val(),
                subject: $("#contact-form-subject").val(),
                message: $("#contact-form-message").val()
            }),
            contentType: 'application/json'
        });
        window.location.reload();

    });

// =============================================================== hide #path from url
    $(window).on('hashchange', function(e){
        history.replaceState ("", document.title, e.originalEvent.oldURL);
    });
    // history.pushState("", document.title, window.location.pathname);


});