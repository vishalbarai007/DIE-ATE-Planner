import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signInWithRedirect, getRedirectResult, GoogleAuthProvider } from'firebase/auth';
import 'firebase/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyDRQhfdz24X8gjebMWCmnR15hqR2i7HpFY",
    authDomain: "die-ate.firebaseapp.com",
    projectId: "die-ate",
    storageBucket: "die-ate.firebasestorage.app",
    messagingSenderId: "657182440055",
    appId: "1:657182440055:web:752e04c76377092cf12472",
    measurementId: "G-YQGKP0P2XV"
};
  

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();


const handleGoogleLoginWithPopup = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if(credential){
      const token = credential.accessToken;
      console.log(token); // REMOVE LATER
    }
    // The signed-in user info.
    const user = result.user;
    console.log(user); // REMOVE LATER
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // // The email of the user's account used.
    // const email = error.customData.email;
    // // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(error)
    // ...
  });
}

const handleGoogleLoginWithRedirect = () => {
  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    if(result){
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if(credential){
        const token = credential.accessToken;
        console.log(token); // REMOVE LATER
      }
      // The signed-in user info.
      const user = result.user;
      console.log(user); // REMOVE LATER
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }
  }).catch((error) => {
    // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // // The email of the user's account used.
    // const email = error.customData.email;
    // // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(error);
    // ...
  });

}

export { handleGoogleLoginWithPopup, handleGoogleLoginWithRedirect };

