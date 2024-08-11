const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
const { getAuth, setPersistence, browserSessionPersistence } = require("firebase/auth");
const { getPerformance } = require("firebase/performance");
const {
    initializeFirestore,
    persistentMultipleTabManager,
    persistentLocalCache
} = require("firebase/firestore");

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
    performance = getPerformance(app); // Added `app` as parameter
}

const auth = getAuth();

const db = initializeFirestore(app, {
    localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() })
});

setPersistence(auth, browserSessionPersistence)
    .then(() => {
        // Now the auth state will be persisted in local storage
    })
    .catch((error) => {
        console.error("Error setting persistence:", error);
    });

const firebaseServices = {
    app, auth, db, analytics, performance
};

module.exports = firebaseServices;