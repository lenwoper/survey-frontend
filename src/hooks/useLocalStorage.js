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

    const getData = React.useCallback((key_) => {
        try {
            if (window !== undefined && key_) {
                const data = localStorage.getItem(key_);
                return data ? JSON.parse(data) : null
            } else {
                return { msg: { key: key_, window: window } };
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
