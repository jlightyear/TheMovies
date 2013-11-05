if (window.DeviceOrientationEvent) {
  console.log("DeviceOrientation are supported!");
}

function onChange(eventData) {
    
    var y = eventData.gamma;
    var x = eventData.beta;
    var z = eventData.alpha;

    var logo = document.querySelector('#logo');
    logo.style.webkitTransform = "rotateY(" + y * 10 + "deg)";
}

window.addEventListener('deviceorientation', onChange, false);

    