import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { JWTAuth } from "../service/JWT-decode";

const ReoladHome = (props: { children: any; }) => {

    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isAuth = JWTAuth()

    const checkUserToken = () => {
        setIsLoggedIn(isAuth);

        if (isAuth) { //se o token estiver expirado, navega para login
            return navigate('/home');
        }
    }

    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);

    return (
        isLoggedIn ? props.children : null
    );
}

export default ReoladHome;