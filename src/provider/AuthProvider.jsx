import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";
import { ToastMsgWarn } from "../components/Toast/ToastMsg";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const googleUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const gitHubUser = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  const facebookUser = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  const profileName = (user, name) => {
    setLoading(true);
    return updateProfile(user, name);
  };

  const createUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const loginWithEmailPass = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      if (currentUser) {
        const { displayName, email, photoURL } = currentUser && currentUser;

        const newUser = { displayName, email, photoURL, role: "student" };
        // console.log(newUser);
        axios.post("http://localhost:3000/users", newUser);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  const authInfo = {
    user,
    loading,
    googleUser,
    gitHubUser,
    facebookUser,
    profileName,
    createUser,
    logOut,
    loginWithEmailPass,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
