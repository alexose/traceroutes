/**
 * Created by catthumbs on 5/1/14.
 */
"use strict";

function initialize() {
    var home = new google.maps.LatLng(42.338559, -71.138827);
    var westRoxbury = new google.maps.LatLng(42.275757, -71.156028);
    var needham = new google.maps.LatLng(42.286568, -71.231199);
    var nyc = new google.maps.LatLng(40.727658, -74.007792);
    var tubes = new google.maps.LatLng(44.562475, -30.425952);
    var london = new google.maps.LatLng(51.504789, -0.087454);
    var dusseldorf = new google.maps.LatLng(52.296561, 4.948505);
    var amsterdam = new google.maps.LatLng(51.188726, 6.866013);
    var helsinki = new google.maps.LatLng(60.163718, 24.914432);
    var vk = new google.maps.LatLng(59.947693, 30.381907);

    var locations = [
        home,westRoxbury,needham,nyc,tubes,london,dusseldorf,amsterdam,helsinki,vk
    ];

    var markers = [];
    var iterator = 0;

    var mapOptions = {
        center: locations[0],
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,
        disableDoubleClickZoom: true,
        zoom: 12
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);

    function addMarker() {
        markers.push(new google.maps.Marker({
            position: locations[iterator],
            map: map,
            draggable: false
        }));
        iterator++;
    }

    for (var i = 0; i < locations.length; i++) {
        addMarker();
    }

    google.maps.event.addListener(map, 'bounds_changed',function(){
        location.hash='lat='+this.getCenter().lat().toFixed(6)+
            '&lng='+this.getCenter().lng().toFixed(6);
    });

    var mover = 0;

    while (mover < locations.length) {

        google.maps.event.addListener(markers[mover], 'click', function () {
            map.panTo(locations.shift());
        });

        mover++;
    }
}
google.maps.event.addDomListener(window, 'load', initialize);
