function myNotificationFunction(evt) {
    var myNotification = new Notification('Predix Notification', {
        body: 'You got a notification from Predix!'
    });

    myNotification.onclick = () => {
        console.log('Notification clicked');
    };
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("myNotificationButton").addEventListener("click", myNotificationFunction);
})