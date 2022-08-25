import { createContext, useEffect, useState, } from "react";
import * as partsService from '../services/PartsService';
import { useNavigate } from "react-router-dom";
export const PartsContext = createContext();


export const PartsProvider = ({ children }) => {
    const navigate = useNavigate();
    const [parts, setParts] = useState([]);
    useEffect(() => {
        partsService.getAll()
            .then(data => {

                setParts(Object.values(data))

            })
            .catch((err) => {
                navigate('/404');
                return
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