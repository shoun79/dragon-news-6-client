// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_zKpWRAMsovlunxPTOFUWF1qEn_XvZpA",
    authDomain: "dragon-news-6.firebaseapp.com",
    projectId: "dragon-news-6",
    storageBucket: "dragon-news-6.appspot.com",
    messagingSenderId: "827334736270",
    appId: "1:827334736270:web:0fd9cc1c507be4e7870cdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;