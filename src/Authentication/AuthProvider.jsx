import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./Firebase.config";

const GProvider = new GoogleAuthProvider();
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // login with email and password
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // show user
    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        });
        return () => { return subscribe() }
    }, [])

    // login with gmail 
    const loginWithGmail = () => {
        setLoading(true);
        return signInWithPopup(auth, GProvider)
    }
    // logout 
    const logout = () => {
        return signOut(auth)
    }

    const info = {
        logout,
        loading,
        createUser,
        user,
        loginUser,
        loginWithGmail,
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;