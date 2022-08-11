import { createContext, useEffect, useState } from "react";
import * as partsService from '../services/PartsService';

export const PartsContext = createContext();


export const PartsProvider = ({ children }) => {

    const [parts, setParts] = useState([]);
    useEffect(() => {
        partsService.getAll()
            .then(data => {

                setParts(Object.values(data))

            })
           
    }, []);

    const addPartHandler = (partData) => {
        setParts(state => [
            ...state,
            partData]);
    };

    const editPartState = (id, partData) => {
        setParts(state => state.map(x => x._id === id ? partData : x));
    };

    const emptyPartsState = (id) => {
        setParts(state => state.filter(x => x._id !== id));
    };


    return (
        <PartsContext.Provider value={{ parts, addPartHandler, editPartState, emptyPartsState }}>
            {children}
        </PartsContext.Provider>
    )

}