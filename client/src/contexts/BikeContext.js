import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as bikeService from '../services/BikeService';

export const BikeContext = createContext();

export const BikeProvider = ({ children }) => {
    const navigate = useNavigate();
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        bikeService.getAll()
            .then(data => {

                setBikes(Object.values(data));
            })
            .catch((err) => {
                navigate('/404');
                return
            })



    }, []);

    const addBikeHandler = (bikeData) => {

        setBikes(state => [
            ...state,
            bikeData]);
    }
    const emptyBikeState = (id) => {

        setBikes(state => state.filter(x => x._id !== id));
    }

    const editBikeState = (id, bikeData) => {
        setBikes(state => state.map(x => x._id === id ? bikeData : x));
    }

    return <BikeContext.Provider value={{ bikes, addBikeHandler, emptyBikeState, editBikeState }}>

        {children}
    </BikeContext.Provider>
}