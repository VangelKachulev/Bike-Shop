import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const PrivateGuard = () => {

    const { userData } = useContext(AuthContext);

    if (!userData.accessToken) {
        return <Navigate to='/login' replace />
    }

    return <Outlet />
}