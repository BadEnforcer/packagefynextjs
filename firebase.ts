import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, browserLocalPersistence } from "firebase/auth";
import {
    initializeFirestore,
    CACHE_SIZE_UNLIMITED,
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
const analytics = getAnalytics(app);
const auth = getAuth();
const db = initializeFirestore(app,  {localCache: persistentLocalCache({tabManager: persistentMultipleTabManager()})});

auth.setPersistence(browserLocalPersistence);

const firebaseServices = {
    app, analytics, auth, db
}


export default firebaseServices