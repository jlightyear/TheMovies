if (navigator.geolocation) {
  console.log("Geolocation is available ");
}

function onError(error) {
  alert("Error on GPS" +  error);
}

function getDistance(lat1,lon1,lat2,lon2) {
  var earthRadius = 6371; // Radius of the earth in km
  var dLat = toRadians(lat2-lat1);  // deg2rad below
  var dLon = toRadians(lon2-lon1); 
  var a = 
  Math.sin(dLat/2) * Math.sin(dLat/2) +
  Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * 
  Math.sin(dLon/2) * Math.sin(dLon/2)
  ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var distance = earthRadius * c; // Distance in km
  return distance;
}

function toRadians(degrees) {
  return degrees * (Math.PI/180)
}

function showCurrentLocation() {
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    $$('.location p span').text(lat + ', ' + lon);
  });
}
