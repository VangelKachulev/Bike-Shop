
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as UserService from '../../services/UserService';
import { useNavigate } from "react-router-dom";

export const Logout = () => {
    const navigate = useNavigate()
    const { userData, userLogout } = useContext(AuthContext);

    useEffect(() => {
        UserService.logout(userData.accessToken)
            .then(() => {
                userLogout();
                navigate('/')

            })
            .catch(() => {
                navigate('/')
            });
    }, [])

}
