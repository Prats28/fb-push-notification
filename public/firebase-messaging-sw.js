importScripts(
    "https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js"
);
importScripts(
    "https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyC_1E9CrdZ3-uEJf2dByvDB41LsfvCjjhY",
  authDomain: "push-notiifcation-359bc.firebaseapp.com",
  projectId: "push-notiifcation-359bc",
  storageBucket: "push-notiifcation-359bc.appspot.com",
  messagingSenderId: "925316233978",
  appId: "1:925316233978:web:bae7b68b9cd41703e1a743",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(({ notification }) => {
    console.log("[firebase-messaging-sw.js] Received background message ");
    // Customize notification here
    const notificationTitle = notification.title;
    const notificationOptions = {
        body: notification.body,
    };

    if (notification.icon) {
        notificationOptions.icon = notification.icon;
    }

    self.registration.showNotification(notificationTitle, notificationOptions);
});