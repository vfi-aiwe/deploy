/* eslint-disable */
if(!navigator.userAgent.match(/Version\/[\d\\.]+.*Safari/)) {
  importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
  importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: 'AIzaSyAPHswG78_TLOgrq0hGil9p7KJEuk4dvvY',
  authDomain: 'robotic-weft-282719.firebaseapp.com',
  projectId: 'robotic-weft-282719',
  storageBucket: 'robotic-weft-282719.appspot.com',
  messagingSenderId: '13238098549',
  appId: '1:13238098549:web:ff30e1ac9e864ddf1a363c',
  measurementId: 'G-59KTD1E779'
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', event => {
  if (event.action) {
    clients.openWindow(event.action);
  }
  event.notification.close();
});
}