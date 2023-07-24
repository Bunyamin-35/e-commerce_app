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
                alert("kadfndkljnf")
                navigate("/login")
            }
            console.log("the cookie", cookies.accesstoken);
            const { data } = await axios.post(
                "http://localhost:4000/backend/auth/",
                {},
                { withCredentials: true }
            );
            const { status, user } = data;
            setUsername(user);
            return status ? alert(`Hello ${username}`) : (removeCookie("accesstoken"), navigate("/login"))
        };
        isTokenExist();
    }, [cookies, navigate]);




    // useEffect(() => {
    //     // Sayfa yüklendiğinde, localStorage'dan token'ı alırız.
    //     const accesstoken = localStorage.getItem('access-token')
    //     console.log(accesstoken);
    //     // Eğer localStorage'da "token" yoksa, kullanıcıyı login sayfasına yönlendiririz.
    //     if (!accesstoken) {
    //         navigate("/login");
    //     } else {
    //         // localStorage'dan alınan token ile sunucuya bir istek yaparak kullanıcının adını alırız.
    //         axios
    //             .post("http://localhost:4000/backend/auth/", {}, { withCredentials: true })
    //             .then((response) => {
    //                 const { status, user } = response.data;

    //                 // Sunucudan dönülen status true ise, kullanıcı adını state'e ekleriz.

    //                 if (status) {
    //                     setUsername(user);
    //                 } else {
    //                     // Sunucudan dönülen status false ise, kullanıcının token'i geçersiz demektir.
    //                     // Bu durumda, localStorage'dan "token"i kaldırırız ve kullanıcıyı login sayfasına yönlendiririz.
    //                     localStorage.removeItem("token");
    //                     navigate("/login");
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.error("Error fetching user data: ", error);
    //                 // Sunucudan dönülen hata durumunda da kullanıcıyı login sayfasına yönlendiririz.
    //                 navigate("/login");
    //             });
    //     }
    // }, [navigate]);
    return (
        <>
            <Navbar />
            <div className="dashboard_content">
                <div className="left_bar">
                    <div className="user_info">
                        <h2>User Info</h2>
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