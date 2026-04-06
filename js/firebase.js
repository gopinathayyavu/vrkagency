// Firebase configuration - REPLACE WITH YOUR OWN FIREBASE PROJECT DETAILS
const firebaseConfig = {
  apiKey: "AIzaSyCJ1M-aTXGVaaIPOYRWW8Y3Ym7_Er6zpEc",
  authDomain: "vrk-agency.firebaseapp.com",
  databaseURL: "https://vrk-agency-default-rtdb.firebaseio.com",
  projectId: "vrk-agency",
  storageBucket: "vrk-agency.firebasestorage.app",
  messagingSenderId: "1014789484395",
  appId: "1:1014789484395:web:b265ef4487bcf9c206a62e",
  measurementId: "G-P0CS4ZRGD1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
window.firebaseDb = firebase.database();