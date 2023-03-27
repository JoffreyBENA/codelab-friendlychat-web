/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const firebaseConfig = {
  apiKey: "AIzaSyCT6mTdhVuwtnf_BVeU0nxwk-FohHeJOuY",
  authDomain: "friendlychat-86bc6.firebaseapp.com",
  projectId: "friendlychat-86bc6",
  storageBucket: "friendlychat-86bc6.appspot.com",
  messagingSenderId: "14144785291",
  appId: "1:14144785291:web:87342dd80e9c54c26efd8e"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}