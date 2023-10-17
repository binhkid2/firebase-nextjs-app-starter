import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAtjG5LMy0xE3JF9njWgqVaIAivyD3_lQ8",
  authDomain: "saas-7b317.firebaseapp.com",
  projectId: "saas-7b317",
  storageBucket: "saas-7b317.appspot.com",
  messagingSenderId: "219268569543",
  appId: "1:219268569543:web:a661513ab5d80976b321e2",
  measurementId: "G-KS19PDH9KV"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();
 export {app,auth, provider}
 
