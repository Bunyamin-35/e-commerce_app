import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import { useEffect } from "react"
import Navbar from "../../components/Navbar/index.jsx"

const Dahsboard = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");

    const [cookies, removeCookie] = useCookies([]);

    useEffect(() => {
        const isTokenExist = async () => {
            if (!cookies.accesstoken) {
                navigate("/login")
            }
            const { data } = await axios.post(
                "http://localhost:4000/backend/auth/",
                {},
                { withCredentials: true }
            );
            const { status, user } = data;
            console.log(user);
            setUsername(user);
            return status ? console.log(`Hello ${user}`) : (removeCookie("accesstoken"), navigate("/login"))
        };
        isTokenExist();
    }, [cookies, navigate,removeCookie]);

    return (
        <>
            <Navbar />
            <div className="dashboard_content">
                <div className="left_bar">
                    <div className="user_info">
                        <h2>User Info</h2>
                        <span>{username}</span>
                    </div>
                    <div className="order_info">
                        <h2>Order Info</h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque necessitatibus commodi nulla minus est ipsam, rerum sunt corporis debitis asperiores quasi, distinctio fugiat dolore saepe ducimus. Incidunt, totam asperiores nam rem aliquam culpa doloremque distinctio temporibus corporis quia quis adipisci.
                    </div>
                    <div className="settings">
                        <h2>Settings</h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque necessitatibus commodi nulla minus est ipsam, rerum sunt corporis debitis asperiores quasi, distinctio fugiat dolore saepe ducimus. Incidunt, totam asperiores nam rem aliquam culpa doloremque distinctio temporibus corporis quia quis adipisci.
                    </div>
                </div>
                <div className="right_bar">
                    <div className="contents">
                        <h2>Settings</h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque necessitatibus commodi nulla minus est ipsam, rerum sunt corporis debitis asperiores quasi, distinctio fugiat dolore saepe ducimus. Incidunt, totam asperiores nam rem aliquam culpa doloremque distinctio temporibus corporis quia quis adipisci.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dahsboard