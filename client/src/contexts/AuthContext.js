import { createContext } from "react";
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useLocalStorage('auth', {});

    const userLogin = (data) => {
        setUserData(data);
    };
    const userLogout = () => {
        setUserData({});
    };


    return <AuthContext.Provider value={{ userData, userLogin, userLogout }}>
        {children}
    </AuthContext.Provider>



}