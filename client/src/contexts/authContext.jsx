import { useState, createContext, useContext, useEffect } from "react";
//import { fetchMe } from "../api.jsx";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") ?? false);
    const [cookies, removeCookie] = useCookies([]);
    const [theCurrentUserId, setTheCurrentUserId] = useState("")
    const parseJwt = (token) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    };

    useEffect(() => {
        const verifyToken = () => {
            const token = cookies.accesstoken;
            if (!token || Object.values(token) !== "undefined") {

            } else if (token) {
                localStorage.setItem("isLoggedIn", true)
            }
        };

        verifyToken();
    }, [cookies.accesstoken, isLoggedIn]);


    // const token = cookies.accesstoken;
    // if (Object.values(token) !== "undefined") {
    //     setIsLoggedIn(true);
    //     setTheCurrentUserId(parseJwt(token).userId);
    // } else {
    //     setIsLoggedIn(false);
    //     console.log("asdkjhbadjka");
    //     setTheCurrentUserId("");
    // }
    // useEffect(() => {
    //     const verifyToken = async () => {
    //         const token = cookies.accesstoken;
    //         const parseJwt = (token) => {
    //             try {
    //                 return JSON.parse(atob(token.split('.')[1]));
    //             } catch (e) {
    //                 return null;
    //             }
    //         };

    //         setTheCurrentUserId(parseJwt(token).userId)


    //         const basket = JSON.parse(localStorage.getItem("basket") ?? "[]");
    //         console.log("basket[0]",basket[0].userId);
    //         console.log("basket[0]",basket[0].userId);
    //         console.log("current user 30. satır",theCurrentUserId);
    //         if (basket[0]?.userId !== theCurrentUserId) {
    //             localStorage.removeItem("basket")
    //         }
    //         else {
    //             console.log("ajhedbfkalsmj");
    //         }
    //         if (!Object.values(token) === "undefined") {
    //             setIsLoggedIn(true);
    //         }
    //     };
    //     verifyToken();
    //     console.log("isloggedin:", isLoggedIn);

    // }, [cookies.accesstoken]);

    const login = (data) => {
        if (data) {
            setIsLoggedIn(true);
            setUser(data);
        } else {
            console.log("Some error in login process");
        }
    }
    const handleLogout = () => {
        removeCookie("accesstoken");
        setIsLoggedIn(false);
        navigate("/")
        console.log("Logout process is carried out!");
        // if (cookies.accesstoken) {
        //     removeCookie("accesstoken");
        //     setIsLoggedIn(false);
        //     navigate("/")
        //     console.log("Logout process is carried out!");
        // }
    }
    

    localStorage.setItem("isLoggedIn", isLoggedIn)

    const values = {
        isLoggedIn,
        user,
        login,
        handleLogout,
        setIsLoggedIn,
        parseJwt
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth }