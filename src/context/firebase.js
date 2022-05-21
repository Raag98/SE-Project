import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyBQDwENr3HBczi-LUTsLnzCyxMbttUwl-Y",
  authDomain: "digital-study-657e7.firebaseapp.com",
  projectId: "digital-study-657e7",
  storageBucket: "digital-study-657e7.appspot.com",
  messagingSenderId: "434528004563",
  appId: "1:434528004563:web:6cb0e7081a54316c356726",
});

export const auth = getAuth();
