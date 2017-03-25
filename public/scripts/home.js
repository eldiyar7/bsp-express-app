$(function () {


    'use strict';
// =============================================================== 'projects' section slider
    $(document).ready(function () {
        $("#projects-slider").lightSlider();
    });
// =============================================================== 'contact' section form
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
            success: function () {
                $('.btn').blur();
                $("#contactus-form")[0].reset();
            },
            error: function () {
                $("#contactus-form")[0].reset();
            }
        });
    });
// =============================================================== hide '#' path from url
    $(window).on('hashchange', function (e) {
        history.replaceState("", document.title, e.originalEvent.oldURL);
    });
    // history.pushState("", document.title, window.location.pathname);


});