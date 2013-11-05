var notification = function() {

    var _icon = 'icon.png';

    var _notify = function(title, content){
        if (window.webkitNotifications) {
            console.log("Notifications are supported");
        }

        if (window.webkitNotifications.checkPermission() == 0) {
            console.log("Notifications are supported");
        }

        window.webkitNotifications.createNotification(_icon, title, content).show();
    };

    return {
            notify: _notify
        };
}();