import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAfm_QgBeIeZqhGxZq7F2Ou9K66bHqZvqA",
    authDomain: "airhq-app.firebaseapp.com",
    projectId: "airhq-app",
    storageBucket: "airhq-app.appspot.com",
    messagingSenderId: "110013883707",
    appId: "1:110013883707:web:a3f7e09a8310bbcdc4431e"
  };

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);