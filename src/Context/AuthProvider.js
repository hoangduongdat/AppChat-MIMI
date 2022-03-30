import { Spin } from 'antd';
import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../components/firebase/config';

export const AuthContext = createContext()

function AuthProvider({children}) {
    const [user,setUser] = useState({})
    const [isLoading,setIsLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        const unSubscibed = auth.onAuthStateChanged((user) => {   
            console.log(user)
            if(user) {
                const {displayName, email, uid, photoURL} =user
                setUser({
                    displayName, email, uid, photoURL
                })
                setIsLoading(false)
                navigate('/')
            }
            else {
                setIsLoading(false)
                navigate('/login')
            }
        })

        //clean function
        return () => {
            unSubscibed()
        }

    },[navigate])
    
    return (
        <AuthContext.Provider value={{user}}>
            {isLoading ? <Spin/> : children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

