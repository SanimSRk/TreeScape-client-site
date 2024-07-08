// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBGRvrVJ_Egqh7IVN8Z9fOXWqe_YRk7pF8',
  authDomain: 'treescape-487fd.firebaseapp.com',
  projectId: 'treescape-487fd',
  storageBucket: 'treescape-487fd.appspot.com',
  messagingSenderId: '287748236589',
  appId: '1:287748236589:web:eb5eba7e97bb31dc1c1fa4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
