import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const userInfo = {
        user, 
        loading
    }
    return (
        <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProviders;