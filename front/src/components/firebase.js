import firebase from 'firebase/app'; // if it started to creating some troubles - delete /app
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD3vOz1EAHFbg63CHRZzJ7p8D0uVSy4h-o",
  authDomain: "escape-51de8.firebaseapp.com",
  projectId: "escape-51de8",
  storageBucket: "escape-51de8.appspot.com",
  messagingSenderId: "816356291945",
  appId: "1:816356291945:web:77332643406c18546339f8"
};

firebase.initializeApp(config);

export default firebase
