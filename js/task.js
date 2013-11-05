self.onmessage = function(event) {
    self.postMessage("Recibed:" + event.data);
};

// var worker = new Worker('task.js');
// worker.postMessage(['model', 'movies']);

// worker.addEventListener("message", function(event) {
//     console.log(event);
// });