$$(document).ready(function() {
    $$('.button-add').on('click', function() {
     $$('.button-add').html('added!')
    });
});
 ;if (navigator.geolocation) {
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
;var storage = function () {
    _key = null;
    _fields = {};

    var _model = function(name, fields) {
        _key = name;
        if (fields) _fields[_key] = fields;     
    };

    var _create = function() {
        var repository = _get();
        repository[arguments[0]] = _createObject(arguments);
        _save(repository);
    };

    var _read = function(name) {
        var repository = _get();
        console.log((name) ? repository[name] : repository);    
        return (name) ? repository[name] : repository;
    };

    var _update = function() {
        var repository = _get();
        var name = arguments[0];
        if (repository[name])
            repository[name] = _createObject(arguments);
        _save(repository);
    };

    var _drop = function(name) {
        var repository = _get();
        delete repository[name];
        _save(repository);
    };

    var _get = function() {
        return JSON.parse(window.localStorage.getItem(_key)) || {};
    };

    var _save = function(data) {
        if (_key) window.localStorage.setItem(_key, JSON.stringify(data));
    };

    var _createObject = function(properties) {
        var model = {};
        for (var element in _fields[_key]) {
            field = _fields[_key][element]; 
            model[field] = properties[parseInt(element) +1 ];
        }
        return model;
    };

    return {
        model   : _model,
        create  : _create,
        read    : _read,
        update  : _update,
        drop    : _drop
    };
    
}();
