// utils/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-4b50b.firebaseapp.com",
  projectId: "blog-4b50b",
  storageBucket: "blog-4b50b.appspot.com",
  messagingSenderId: "467594489915",
  appId: "1:467594489915:web:a2aa8efb69dd175eff6c1e",
  measurementId: "G-KNB6PJ610W"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
