import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // create new user with email
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login with email
    const loginWithEmail = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // sign in with google
    const signInWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    // update profile
    const updateUser = (name, photoUrl, role)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photoUrl
        });
    }
    // user monitoring 
    useEffect(()=>{
        setLoading(true);
        const unsubscribe = auth.onAuthStateChanged((user)=>{
            setLoading(true);
            if(user){
                setUser(user);
            }else{
                setUser(null);
            }
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[])
    // Sign out user
    const LogOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    const userInfo = {
        user, 
        loading,
        createUser,
        loginWithEmail,
        updateUser,
        signInWithGoogle,
        LogOut
    }
    return (
        <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProviders;