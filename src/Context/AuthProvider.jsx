import {  createContext, useEffect, useState } from "react";
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState()
    const [loading, setLoading]=useState(true)

    // create user with email
    const createUseWithEmail = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    // sign in with email & password
    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // sign out
    const signout = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    // signIn with google
    const googProvider = new GoogleAuthProvider()
    const signIngWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth,googProvider)
    }

    // signIn with Github
    const gitHubProvider = new GithubAuthProvider()
    const signInWidthGithub = ()=>{
        setLoading(true)
        return signInWithPopup(auth,gitHubProvider)
    }

    // manage user
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, user=>{
             setUser(user)
             setLoading(false)
         })
         return ()=>unSubscribe();
     },[])

    const authInfo = {
        user,
        createUseWithEmail,
        signIn,
        signout,
        signIngWithGoogle,
        signInWidthGithub,
        loading
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo }>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;