import { useState, createContext, useContext, useEffect } from "react";
//import { fetchMe } from "../api.jsx";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cookies, removeCookie] = useCookies([]);
    useEffect(() => {
        const verifyToken = async () => {
            const token = cookies.accesstoken;

            const basket = JSON.parse(localStorage.getItem("basket") ?? "[]");
            if (basket[0]?.token !== token) {
                localStorage.removeItem("basket")
            }
            if (!Object.values(token) === "undefined") {
                setIsLoggedIn(true);
            }
        };
        verifyToken();
        console.log("isloggedin:", isLoggedIn);
    }, [cookies.accesstoken]);

    const login = (data) => {
        setIsLoggedIn(true);
        setUser(data);
    }
    console.log("isloggedin:", isLoggedIn);

    const values = {
        isLoggedIn,
        user,
        login,
        setIsLoggedIn,
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth }