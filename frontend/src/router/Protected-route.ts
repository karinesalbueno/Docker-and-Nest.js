import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { JWTAuth } from "../service/JWT-decode";

const ProtectedRoute = (props: { children: any }) => {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const isAuth = JWTAuth()
        isAuth ? setIsLoggedIn(true) : {}

        if (isAuth) { // se token estiver válido, redirieciona para home
            return navigate('/home');
        }
        if (!isAuth) { // se token estiver inválido ou expirado, redirieciona para login
            return navigate('/login');
        }
    }, [navigate]);

    return (
        isLoggedIn ? props.children : null
    );
}

export default ProtectedRoute;