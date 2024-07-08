import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.init';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const GoogleParovier = new GoogleAuthProvider();
  const FaceBooks = new FacebookAuthProvider();
  const handileClickCreate = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handileUpdate = (fullName, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: fullName,
      photoURL: photo,
    });
  };
  const handileClickGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleParovier);
  };
  const handileClickSignUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handileClickLogOut = () => {
    setLoading(false);
    setUser(null);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((auth, currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe;
  });
  const info = {
    handileClickCreate,
    handileClickSignUser,
    handileClickLogOut,
    user,
    loading,
    handileClickGoogle,
    handileUpdate,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
