'use strict';

/*============= Preloader Section =============*/

$(document).ready(function() {
        $(".loader").fadeOut();
        $("#preloader").delay(200).fadeOut('slow');

//=============  Add Wow =============//
        new WOW().init();
});


//=============  Gallery Page =============//

$(document).ready(function() {
        $('.image-popup').magnificPopup({type:'image'});
});


//=============  Gallery Page =============//
