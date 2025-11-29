import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentGame,setCurrentGame]=useState(null)

  
  const updateUser = (userData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, userData);
  };


  useEffect(() => {
    fetch("/game.json")
      .then((res) => res.json())
      .then((response) => {
        setGame(response);
      });
  }, []);

  
  const userRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  
  const sigOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  
  const signWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  
  const userInfo = {
    userRegister,
    user,
    setUser,
    logIn,
    sigOut,
    updateUser,
    game,
    loading,
    setLoading,
    signWithGoogle,
    resetPassword,
    setCurrentGame,
  };

  
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
