import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../../firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // create new user with email
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login with email
    const loginWithEmail = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    // sign in with google
    const signInWithGoogle = ()=>{
        return signInWithPopup(auth, provider);
    }
    // update profile
    const updateUser = (name, photoUrl)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photoUrl
        });
    }
    const userInfo = {
        user, 
        loading,
        createUser,
        loginWithEmail,
        updateUser,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProviders;