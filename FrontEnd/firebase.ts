import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signInWithRedirect, getRedirectResult, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore'; 

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
const db = getFirestore(firebaseApp);

enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}

interface SignUpData{
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  cpassword: string
}

interface SignInData{
  email: string,
  password: string
}

interface userData{
  age: number,
  gender: Gender,
  height: number,
  weight: number,
  issue: string,
  goal: string | null
}

const signUp = (formData: SignUpData, redirect: Function) => {
  createUserWithEmailAndPassword(auth, formData.email, formData.password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    redirect(user.uid);
  })
  .catch((error) => {
    console.log(error);
  })
}

const signIn = (formData: SignInData, redirect: Function) => {
  signInWithEmailAndPassword(auth, formData.email, formData.password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    redirect();
  })
  .catch((error) => {
    console.log(error);
  })
}

const handleGoogleLoginWithPopup = (redirect: Function) => {
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
    redirect(user.uid);
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

const handleGoogleLoginWithRedirect = (redirect: Function) => {
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
      redirect(user.uid);
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

const addPersonalData = async (data: userData, id: string) => {
  try {
    const docRef = await addDoc(collection(db, "personal-info"), { uid: id, ...data });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export { handleGoogleLoginWithPopup, handleGoogleLoginWithRedirect, signUp, signIn, addPersonalData };

