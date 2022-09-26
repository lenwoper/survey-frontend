import React from "react";
export const useLocalStorage = () => {
    const setData = React.useCallback((key, data) => {
        try {
            if (window !== undefined && key && data) {
                localStorage.setItem(key, JSON.stringify(data));
            } else {
                return undefined ;
            }
        } catch (err) {
            throw new Error("LocalStorage :", err.message);
        }
    }, []);

    const getData = React.useCallback((key) => {
        try {
            if (window !== undefined && key) {
                const data = localStorage.getItem(key);
                return data ? JSON.parse(data) : null
            } else {
                return undefined;
            }
        } catch (err) {
            throw new Error("LocalStorage :", err.message);
        }
    }, []);

    return {
        setData,
        getData,
       
    }
};
