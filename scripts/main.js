'use strict';

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

jQuery(document).ready(function ($) {
    //initialise Stellar.js
    if(!isMobile.any()){
        $(window).stellar();
    }
    // $.stellar();
    //Cache some variables
    $('body').scrollspy({ target: '#navbar' });

    $('a[href^=\'#\']').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 300);
    });

    function initialize() {

        var myLatlng = new google.maps.LatLng(52.253348,-7.059197);
        var mapOptions = {
            zoom: 12,
            center: myLatlng
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Waterford Castle'
        });
    }

    // window.onload = loadScript;
    $('#mapModal').on('shown.bs.modal', function () {
        initialize();
    });
});