import { useState } from "react";

export const useLocalStorage = (key, defaultvalue) => {

    const [value, setValue] = useState(() => {
        const storedData = localStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : defaultvalue;
    });

    const setLocalStorageValue = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue);
    };

    return [
        value,
        setLocalStorageValue,
    ];
}