import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const Authcontext = createContext();

const auth = getAuth(app);



const Usercontext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () => {
        setloading(true);
        return signOut(auth);
    }
    useEffect( () =>{
         const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user inside state changed', currentUser);
             setUser(currentUser);
             setloading(false);
            });
            return () => unSubscribe();
    } ,[])
    const authInfo = {user, loading ,createUser, signIn, logout}
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Usercontext;