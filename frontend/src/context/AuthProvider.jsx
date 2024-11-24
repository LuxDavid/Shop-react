import React, { createContext, useEffect, useState } from "react";
import { Global } from "../helpers/Global.jsx";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({});

    useEffect(() => {
        authUser();
    }, []);

    const authUser = async () => {
        //Sacar datos usuario identificado

        const response = await fetch(`${Global.url}session/current`, {
            method: 'GET',
            credentials: 'include'
        });

        const dataUser = await response.json();

        console.log(dataUser);

        //Setear el estado de auth
        setAuth(dataUser);
    }

    const authSession = async () => {

            const response = await fetch(`${Global.url}session/current`, {
                method: 'GET',
                credentials: 'include',
            });
            const dataUser = await response.json();

            setAuth(dataUser);

    }

    return (<AuthContext.Provider
        value={{
            auth,
            setAuth,
            authSession
        }}>
        {children}
    </AuthContext.Provider>
    )
}

export default AuthContext;