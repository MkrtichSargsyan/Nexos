import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
// import { getAuth } from 'firebase/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// import firebase from '@firebase/app';
require('firebase/auth');

// const REACT_APP_FIREBASE_KEY = process.env.REACT_APP_FIREBASE_KEY;

const firebaseConfig = {
  apiKey: "AIzaSyCmyTmzfx2licQeze02snAfDAtL3D2K5lA",
  authDomain: "nexos-879bb.firebaseapp.com",
  projectId: "nexos-879bb",
  storageBucket: "nexos-879bb.appspot.com",
  messagingSenderId: "950066666083",
  appId: "1:950066666083:web:812dce9a4a83e7601af656"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

// export const auth = getAuth(app);
