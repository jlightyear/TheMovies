$$(document).ready(function() {
    $$('.button-add').on('click', function() {
     $$('.button-add').html('added!')
    });
});



$$(document).ready(function() {
    var mylocation = getCurrentLocation();
    setTimeout(function() {
        $$('#location').append(JSON.stringify(mylocation));
    }, 3000);
    
});




