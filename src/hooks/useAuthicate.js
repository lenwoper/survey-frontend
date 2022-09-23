import React from "react";
import { useLocalStorage } from './useLocalStorage';
import { useFetch } from 'hooks';
import { AUTH_TOKEN, USER_DETAILS } from "constants/localstorageconst";
import toast from 'react-hot-toast';

/*
 * session 
 * isloading login
 * signup 
 * verify otp 
 * reset password 
 * logout 
 */
export const useAuth = () => {
  const { getData, setData } = useLocalStorage(AUTH_TOKEN);
  const { getData: getUser, setData: setUser } = useLocalStorage(USER_DETAILS);
  const session = getData(AUTH_TOKEN);
  const [hasError, SetHasError] = React.useState(null);

  const onSuccess = React.useCallback((response) => {
    setData(response.token);
    setUser(response?.user);
    toast.success(response?.message);
  }, [setData, setUser]);
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
    initialUrl: "/api/login",
    skipOnStart: true,
    onFailure,
    onSuccess,
  });

  const login = React.useCallback((data) => {

    const formData = new FormData();
    formData.append("username", data.email);
    formData.append("password", data.password);
    callFetch({
      url: "/api/login",
      method: "post",
      data: { email: data.email, password: data.password },
    });

  }, [callFetch])

  const logout = React.useCallback(() => {
    try {
      localStorage.clear();
      toast.success('Has been logout ');
    } catch (err) {
      throw new Error(err.message);
    }
  }, [])


  return {
    session,
    signup,
    logout,
    login,
    getUser,
    hasError,
    isLoading
  }
}



