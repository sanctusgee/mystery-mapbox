/**
 * Created by nick on 6/2/15.
 */
L.mapbox.accessToken = 'pk.eyJ1IjoibnJvbm5laSIsImEiOiJ2emt3WUY4In0.cRYAp7rDFZvRUBkExD5kqQ';
var map = L.mapbox.map('map', 'nronnei.mbh6hjh6', {
    shareControl: true,
    attributionControl: {
        compact: true
    }
});

L.hash(map);

//var MyControl = L.Control.extend({
//    options: {
//        position: 'topright'
//    },
//
//    onAdd: function (map) {
//// create the control container with a particular class name
//        var container = L.DomUtil.create('div', 'my-custom-control');
//
//// ... initialize other DOM elements, add listeners, etc.
//
//        return container;
//    }
//});

//map.addControl(new MyControl());

var isNegative = function() {
    var x = Math.round(Math.random());
    if (x > 0) {
        return true;
    } else {
        return false
    }
};

var randomLat = function() {
    var negFlag = isNegative();
    var tail = Math.random();
    var base = Math.floor(Math.random() * 60) + tail;
    if (negFlag) {
        console.log("X: " + -base);
        return -base;
    } else {
        console.log("X: " + base);
        return base;
    }
};

var randomLng = function() {
    var negFlag = isNegative();
    var tail = Math.random();
    var base = Math.floor(Math.random() * 180) + tail;
    if (negFlag) {
        console.log("Y: " + -base);
        return -base;
    } else {
        console.log("Y: " + base);
        return base;
    }
};

var randomZoom = function () {
    var z = Math.floor(Math.random() * (12 - 4) + 4);
    console.log("Z: " + z);
    return z;
};

var randomScene = function() {
    var x = randomLat();
    var y = randomLng();
    var z = randomZoom();
    map.setView([x, y], z);
};


$(function () {
    setInterval(randomScene, 5000);
});