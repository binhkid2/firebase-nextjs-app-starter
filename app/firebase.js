import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
 
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();
 export {app,auth, provider}
 
