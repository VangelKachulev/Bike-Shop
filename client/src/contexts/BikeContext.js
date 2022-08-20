import { createContext, useEffect, useReducer, useState } from "react";
import * as bikeService from '../services/BikeService';

export const BikeContext = createContext();

export const BikeProvider = ({ children }) => {

    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        bikeService.getAll()
            .then(data => {

                setBikes(Object.values(data));
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