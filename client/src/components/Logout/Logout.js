
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as UserService from '../../services/UserService';
import { useNavigate } from "react-router-dom";

export const Logout = () => {
    const navigate = useNavigate()
    const { token, userLogout } = useContext(AuthContext);

    useEffect(() => {
        UserService.logout(token)
            .then(() => {
                userLogout();
                navigate('/')

            })
            .catch(() => {
                
                navigate('/')
            });
    }, [])

}
