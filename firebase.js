import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGsyArsOLd14zVog_j26k7ZMye_u1gRrQ",
  authDomain: "react-9b958.firebaseapp.com",
  projectId: "react-9b958",
  storageBucket: "react-9b958.appspot.com",
  messagingSenderId: "863763578566",
  appId: "1:863763578566:web:aa9d2b4588e09cbe6b21c7",
  measurementId: "G-ERVNG94RS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
