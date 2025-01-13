import { initializeApp } from 'firebase/app';

import { getAuth, signInWithPopup, signInWithRedirect, getRedirectResult, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from'firebase/auth';

import { getFirestore, collection, addDoc } from 'firebase/firestore'; 

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRQhfdz24X8gjebMWCmnR15hqR2i7HpFY",
  authDomain: "die-ate.firebaseapp.com",
  projectId: "die-ate",
  storageBucket: "die-ate.appspot.com", // Corrected typo in storageBucket
  messagingSenderId: "657182440055",
  appId: "1:657182440055:web:752e04c76377092cf12472",
  measurementId: "G-YQGKP0P2XV"
};

// Firebase app initialization
const firebaseApp = initializeApp(firebaseConfig);

// Firebase services
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);

// Enums
enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}

// Interfaces
interface SignUpData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  cpassword: string;
}

interface SignInData {
  email: string;
  password: string;
}

interface userData {
  age: number;
  gender: Gender;
  height: number;
  weight: number;
  issue: string;
  goal: string | null;
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
<<<<<<< Updated upstream
    // const uid = user.uid;
=======
    const uid = user.uid;
    console.log(uid);
    
>>>>>>> Stashed changes
    // ...
  } else {
    // User is signed out
    // ...
  }
});

const signUp = (formData: SignUpData, redirect: Function) => {
  if (formData.password !== formData.cpassword) {
    console.error("Passwords do not match.");
    return;
  }
  createUserWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      redirect(user.uid);
    })
    .catch((error) => {
      console.error("Error code:", error.code, "Error message:", error.message);
    });
};

// Sign-in function
const signIn = (formData: SignInData, redirect: Function) => {
  signInWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      redirect();
    })
    .catch((error) => {
      console.error("Error code:", error.code, "Error message:", error.message);
    });
};

// Google sign-in with popup
const handleGoogleLoginWithPopup = (redirect: Function) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential) {
        const token = credential.accessToken;
        console.log("Access Token:", token); // REMOVE LATER
      }
      const user = result.user;
      console.log("User:", user); // REMOVE LATER
      redirect(user.uid);
    })
    .catch((error) => {
      console.error("Error code:", error.code, "Error message:", error.message);
    });
};

const Logout = () => {

  signOut(auth).then(() => {
    console.log("Logged Out Successfully.");
<<<<<<< Updated upstream
  }).catch((error) => {
    console.log("Error Logging Out.", error);
=======
    alert("Logged Out Successfully.")
  }).catch((_error) => {
    console.log("Error Logging Out.");
>>>>>>> Stashed changes
  })
}

// Google sign-in with redirect
const handleGoogleLoginWithRedirect = (redirect: Function) => {
  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
    .then((result) => {
      if (result) {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
          console.log("Access Token:", token); // REMOVE LATER
        }
        const user = result.user;
        console.log("User:", user); // REMOVE LATER
        redirect(user.uid);
      }
    })
    .catch((error) => {
      console.error("Error code:", error.code, "Error message:", error.message);
    });
};

// Add personal data to Firestore
const addPersonalData = async (data: userData, id: string) => {
  try {
    const docRef = await addDoc(collection(db, "personal-info"), { uid: id, ...data });
    console.log("Document written with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding document:", error);
  }
}

export { handleGoogleLoginWithPopup, handleGoogleLoginWithRedirect, signUp, signIn, Logout, addPersonalData };

