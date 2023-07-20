import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dahsboard = () => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        // Sayfa yüklendiğinde, localStorage'dan token'ı alırız.
        const accesstoken = localStorage.getItem('access-token')
        console.log(accesstoken);
        // Eğer localStorage'da "token" yoksa, kullanıcıyı login sayfasına yönlendiririz.
        if (!accesstoken) {
            navigate("/login");
        } else {
            // localStorage'dan alınan token ile sunucuya bir istek yaparak kullanıcının adını alırız.
            axios
                .post("http://localhost:4000/backend/auth/", {}, { withCredentials: true })
                .then((response) => {
                    const { status, user } = response.data;

                    // Sunucudan dönülen status true ise, kullanıcı adını state'e ekleriz.

                    if (status) {
                        setUsername(user);
                    } else {
                        // Sunucudan dönülen status false ise, kullanıcının token'i geçersiz demektir.
                        // Bu durumda, localStorage'dan "token"i kaldırırız ve kullanıcıyı login sayfasına yönlendiririz.
                        localStorage.removeItem("token");
                        navigate("/login");
                    }
                })
                .catch((error) => {
                    console.error("Error fetching user data: ", error);
                    // Sunucudan dönülen hata durumunda da kullanıcıyı login sayfasına yönlendiririz.
                    navigate("/login");
                });
        }
    }, [navigate]);
    return (
        <div>{username}</div>
    )
}

export default Dahsboard