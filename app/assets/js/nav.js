/**
 * Created by catthumbs on 5/1/14.
 */
"use strict";

function locationHashChanged() {
    switch (location.hash) {
        case "#lat=42.275757&lng=-71.156028":
            document.getElementById("home").style.display="none";
            document.getElementById("westroxbury").style.display="block";
            break;
        case "#lat=42.286568&lng=-71.231199":
            document.getElementById("westroxbury").style.display="none";
            document.getElementById("needham").style.display="block";
            break;
        case "#lat=40.727658&lng=-74.007792":
            document.getElementById("needham").style.display="none";
            document.getElementById("nyc").style.display="block";
            break;
        case "#lat=44.562475&lng=-30.425952":
            document.getElementById("nyc").style.display="none";
            document.getElementById("tubes").style.display="block";
            break;
        case "#lat=51.504789&lng=-0.087454":
            document.getElementById("tubes").style.display="none";
            document.getElementById("london").style.display="block";
            break;
        case "#lat=52.296561&lng=4.948505":
            document.getElementById("london").style.display="none";
            document.getElementById("amsterdam").style.display="block";
            break;
        case "#lat=51.188726&lng=6.866013":
            document.getElementById("amsterdam").style.display="none";
            document.getElementById("dusseldorf").style.display="block";
            break;
        case "#lat=60.163718&lng=24.914432":
            document.getElementById("dusseldorf").style.display="none";
            document.getElementById("helsinki").style.display="block";
            break;
        case "#lat=59.947693&lng=30.381907":
            document.getElementById("helsinki").style.display="none";
            document.getElementById("vk").style.display="block";
            break;
        default:
            document.getElementById("home").style.display="block";
    }
}

window.onhashchange = locationHashChanged;