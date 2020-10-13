/*jslint browser: true */
/*global window, $, alert*/

$(document).ready(function () {
    'use strict';

    $(".smooth-scroll").on('click', 'a', function (e) {
        // Iterate over all and remove active class
        $.each($(".nav-item"), function () {
            $(this).removeClass('active');
        });
        // Add active class on clicked <li>
        $(this).closest(".nav-item").addClass('active');
        // Below is smoothscrolling
        var link = $(this).attr('href');
        // Is there an HTML anchor in the hyperlink?
        if (link.indexOf("#") >= 0) {
            e.preventDefault();
            var hash = link.split('#')[1];
            $('body,html').animate({
                scrollTop: $(link).offset().top - 70
            }, 700);
            window.location.hash = hash;
        }
    });

    // Push footer down
    var docHeight = $(window).height();
    var footerHeight = $('#footer').height();
    var footerTop = $('#footer').position().top + footerHeight;

    if (footerTop < docHeight) {
        $('#footer').css('margin-top', 0 + (docHeight - footerTop) + 'px');
    }

});