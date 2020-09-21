'use strict';

/*============= Preloader Section =============*/

$(document).ready(function() {
        $(".loader").fadeOut();
        $("#preloader").delay(200).fadeOut('slow');

        //=============  Add Wow =============//
        new WOW().init();
});

