import React from "react";
export const useLocalStorage = (key) => {
    const setData = React.useCallback((data) => {
        try {
            if (window !== undefined && key && data) {
                localStorage.setItem(key, JSON.stringify(data));
            } else {
                return { msg: { key: key, data: data, window: window } };
            }
        } catch (err) {
            throw new Error("LocalStorage :", err.message);
        }
    }, [key]);

    const getData = React.useCallback(() => {
        try {
            if (window !== undefined && key) {
                const data = localStorage.getItem(key);
                return data ? JSON.parse(data) : null
            } else {
                return { msg: { key: key, window: window } };
            }
        } catch (err) {
            throw new Error("LocalStorage :", err.message);
        }
    }, [key]);

    return {
        setData,
        getData,
       
    }
};
