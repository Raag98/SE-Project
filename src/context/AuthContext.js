import React, { useState, useEffect, useContext } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  function updateProf(name) {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL:
        "https://png.pngtree.com/png-vector/20191027/ourlarge/pngtree-avatar-vector-icon-white-background-png-image_1884971.jpg",
    });
  }

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    navigate("/");
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        console.log("User not logged in!");
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    signIn,
    logOut,
    updateProf
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
