$(function () {
    'use strict';
// =============================================================== 'projects' section slider
    $(document).ready(function () {
        $("#projects-slider").lightSlider();
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
// =============================================================== 'contact-us' form
    $("#contactus-form").submit(function (event) {
        event.preventDefault();
        $.ajax({
            url: "/contacts",
            type: "POST",
            data: JSON.stringify({
                name: $("#contact-form-name").val(),
                email: $("#contact-form-email").val(),
                phone: $("#contact-form-tel").val(),
                subject: $("#contact-form-subject").val(),
                message: $("#contact-form-message").val()
            }),
            contentType: 'application/json',
            success : function (data) {
                $('.btn').blur();
                $("#contactus-form")[0].reset();
            }
        });
    });
// =============================================================== hide '#' path from url
    $(window).on('hashchange', function(e){
        history.replaceState ("", document.title, e.originalEvent.oldURL);
    });
    // history.pushState("", document.title, window.location.pathname);
// =============================================================== 'application' form
    $(function () {
        $('#application-form').parsley().on('form:submit', function() {
            alert('Your form is submitted!')
        })
    });

});