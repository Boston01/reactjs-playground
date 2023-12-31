import React, { useState } from "react";

export const AuthContext = React.createContext({
    isAuth: false,
    login: () => {},
    logout: () => {},
});

const AuthContextProvider = props => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const loginHandler = () => {
        setIsAuthenticated(true)
    }
    const logoutHandler = () => {
        setIsAuthenticated(false);
    }

    return(
        <AuthContext.Provider value={{ login: loginHandler, isAuth: isAuthenticated, logout: logoutHandler}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;