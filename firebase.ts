import  { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics";
// @ts-nocheck
import { getAuth, setPersistence, browserSessionPersistence  } from "firebase/auth";
import {getPerformance} from "firebase/performance";

import {
    initializeFirestore,
    persistentMultipleTabManager,
    persistentLocalCache
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB5tvflk2WFoI4PGncZWrEOmyakaFQBTYE",
    authDomain: "packagefy.firebaseapp.com",
    projectId: "packagefy",
    storageBucket: "packagefy.appspot.com",
    messagingSenderId: "292607666314",
    appId: "1:292607666314:web:3a79993585ad75d8a12573",
    measurementId: "G-4L0BZGV7V7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics, performance;
if (typeof window !== "undefined") {
    analytics = getAnalytics(app);
    performance = getPerformance()
}
const auth = getAuth();

const db = initializeFirestore(app,  {});

setPersistence(auth, browserSessionPersistence)
    .then(() => {
// Now the auth state will be persisted in local storage
    })
    .catch((error) => {
        console.error("Error setting persistence:", error);
    });


const firebaseServices = {
    app, auth, db, analytics, performance
}

export default firebaseServices;