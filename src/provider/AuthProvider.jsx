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
import { baseUrl } from "../router/router";

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
    return updateProfile(auth, user, name);
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

      if (currentUser) {
        axios
          .post(`${baseUrl}/jwt`, { email: currentUser.email })
          .then((res) => {
            console.log(res.data);
            localStorage.setItem("access-token", res.data.token);
          });
      } else {
        localStorage.removeItem("access-token");
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
