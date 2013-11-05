var storage = function () {
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

// storage.model("movies", ["year", "genre", "director", "similars"]);

// Create
// storage.create("Batman", 1989, "action", "Tim Burton", ["Superman", "Spiderman"]);
// storage.create("Superman", 1982, "action", undefined, ["Batman", "Spiderman"]);
// storage.create("Amazing Spiderman", 2012, "action", "A Freak Director", ["Batman", "Superman"]);
// // Read
// storage.read();
// storage.read("Superman");
// // Update
// storage.update("Batman", 2012, "action", "Tim Burton", ["Superman", "Spiderman"]);
// storage.read("Batman");
// // Delete
// storage.drop("Amazing Spiderman");
// storage.read("Amazing Spiderman");
// storage.read();

storage.model("cinemas", ["position", "movies"]);
storage.create("Palafox", {lat: 40.430109, lon: -3.700892 }, ["Batman", "Superman"]);

var cinema = storage.read();
distanceToCinema(cinema);


