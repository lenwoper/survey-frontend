import React from "react";
import { useLocalStorage } from './useLocalStorage';
import { useFetch } from 'hooks';
import { AUTH_TOKEN } from "constants/localstorageconst";
/*
 * session 
 * isloading login
 * signup 
 * verify otp 
 * reset password 
 * logout 
 */
export const useAuth = () => {
  const { getData, setData } = useLocalStorage();
 const session = getData(AUTH_TOKEN);
  const [hasError, SetHasError] = React.useState(null);

  const onSuccess = React.useCallback((response) => {
    setData(AUTH_TOKEN, response);
  }, [setData]);
  const onFailure = React.useCallback((errors) => {
    SetHasError(errors)
  }, []);
  const signup = React.useCallback((data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.name);
    formData.append('password', data.password);

  }, [])

  const { isLoading, callFetch } = useFetch({
    initialUrl: "/api/login/",
    skipOnStart: true,
    onFailure,
    onSuccess,
  });

  const login = React.useCallback((data) => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);
    callFetch({
      url: "/login/",
      method: "post",
      data: [formData],
    });

  }, [callFetch])





  return {
    session,
    signup,
    login,
    hasError,
    isLoading
  }
}



