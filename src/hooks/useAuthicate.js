import React from "react";
import { useLocalStorage } from './useLocalStorage';
import { useFetch } from 'hooks';
import { AUTH_TOKEN , USER_DETAILS} from "constants/localstorageconst";
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate()
  const { getData, setData } = useLocalStorage();
  const session = getData(AUTH_TOKEN);
  const userDetails = getData(USER_DETAILS);
  const [hasError, SetHasError] = React.useState(null);

  const onSuccess = React.useCallback((response) => {
    if (response?.token) {
      setData(AUTH_TOKEN, response.token);
      setData(USER_DETAILS, response.user);
      toast.success(response?.message);
      navigate("/");
    }
    else {
      toast.success(response?.message);
      navigate('/verify-otp');
    }
  }, [setData, navigate]);
  const onFailure = React.useCallback((errors) => {
    SetHasError(errors);
    toast.error(errors?.message);
  }, []);

  const { isLoading, callFetch } = useFetch({
    initialUrl: "/api/login/",
    skipOnStart: true,
    onFailure,
    onSuccess,
  });
  const signup = React.useCallback((data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.name);
    formData.append("password", data.password);
    callFetch({
      url: "/sigup/",
      method: "post",
      data: [formData],
    });
  }, [callFetch])

  const login = React.useCallback((data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    callFetch({
      url: "/login/",
      method: "post",
      data: formData,
    });

  }, [callFetch])

  const verifyToken = React.useCallback((data) => {
    callFetch({
      url: "/login/",
      method: "post",
      data: [data],
    });
  }, [callFetch])

  const forgetPassword = React.useCallback((data) => {
    callFetch({
      url: "/forget-password/",
      method: "post",
      data: data,
    });
  }, [callFetch])
  const logout = React.useCallback(() => {
    if (window !== undefined) {
      localStorage.clear();
      window.location.reload();
    }
  }, [])
  return {
    session,
    userDetails,
    verifyToken,
    signup,
    logout,
    login,
    forgetPassword,
    hasError,
    isLoading
  }
}



