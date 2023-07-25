import { useState, createContext, useContext, useEffect } from "react";
//import { fetchMe } from "../api.jsx";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log(isLoggedIn);
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('accesstoken') ?? '{}')
        if (token) {
            setIsLoggedIn(true)
            console.log(isLoggedIn);
        }
        else if (Object.keys(user).length === 0) {
            setIsLoggedIn(false)
        }
    }, [])
    const login = (data) => {
        setIsLoggedIn(true);
        setUser(data);
        //console.log("the data", data);
        localStorage.setItem("access-token", JSON.stringify(data.accesstoken));
    }
    const values = {
        isLoggedIn,
        user,
        login,
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth }