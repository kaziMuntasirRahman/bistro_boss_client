import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const axiosPublic = useAxiosPublic()

  // on auth state changed manage
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log("User is present as: " + currentUser.displayName);
        // console.log(currentUser)
        // jwt part
        const userInfo = { email: currentUser.email }
        axiosPublic.post('/jwt', userInfo)
          .then(res => {
            if (res.data.token) {
              localStorage.setItem('access-token', res.data.token)
            }
          })

      } else {
        setUser(null)
        console.log("User is absent");
        // jwt part
        localStorage.removeItem('access-token')
      }
      setLoading(false);
    })
    return () => unsubscribe();
  }, [axiosPublic])

  // create new user
  const createUser = async (name, email, password) => {
    try {
      setLoading(true);
      const credentials = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(auth.currentUser, { displayName: name, photoURL: "https://www.shareicon.net/data/512x512/2016/09/15/829466_man_512x512.png" })
      return credentials;
    }
    catch (err) {
      setLoading(false)
      console.log(err)
      return err;
    }
  }

  // sign in user
  const logIn = async (email, password) => {
    setLoading(true)
    try {
      const credentials = await signInWithEmailAndPassword(auth, email, password)
      return credentials;
    }
    catch (err) {
      console.log(err)
      return err;
    } finally {
      setLoading(false);
    }
  }

  // signout user
  const logOut = async () => {
    setLoading(true)
    try {
      await signOut(auth);
      // console.clear()
      return true;
    } catch (err) {
      console.log(err);
      return err;
    } finally {
      setLoading(false);
    }
  }

  const authInfo = {
    user,
    loading,
    setUser,
    setLoading,
    createUser,
    logIn,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;