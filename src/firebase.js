// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQfg84RPjXyvYpBIWUK9zzCyTvZUuorzE",
    authDomain: "photovote-8228b.firebaseapp.com",
    projectId: "photovote-8228b",
    storageBucket: "photovote-8228b.appspot.com",
    messagingSenderId: "99515048492",
    appId: "1:99515048492:web:69ef36e40861658356a789",
    measurementId: "G-9YDJ0703RJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage();
const mountainsRef = ref(storage, 'mountains.jpg');
const mountainImagesRef = ref(storage, 'images/mountains.jpg');

export default app;