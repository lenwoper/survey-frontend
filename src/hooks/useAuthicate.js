import React from "react";
import { useLocalStorage } from './useLocalStorage';
import { useFetch } from 'hooks';
import { AUTH_TOKEN, USER_DETAILS } from "constants/localstorageconst";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

/*
 * session 
 * isloading login
 * verify otp 
 * reset password 
 * logout 
 */
export const useAuth = () => {
  const navigate = useNavigate()
  const { getData, setData } = useLocalStorage();
  const session = getData(AUTH_TOKEN);
  const userDetails = getData(USER_DETAILS);

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
    toast.error(errors);
  }, []);

  const { isLoading, callFetch } = useFetch({
    initialUrl: "/api/login/",
    skipOnStart: true,
    onFailure,
    onSuccess,
  });

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
      data: data,
      onSuccess: (res) => {
        toast.success(res.msg);
        navigate('/login');
      },
      onFailure: (err) => {
        toast.error(err.msg)
      }
    });
  }, [callFetch , navigate])

  const forgetPassword = React.useCallback((data) => {
    callFetch({
      url: "/forget-password/",
      method: "post",
      data: data,
      onSuccess: (res) => {
        toast.success(res.msg);
      },
      onFailure: (err) => {
        toast.error(err.msg)
      }
    });
  }, [callFetch])
  const logout = React.useCallback(() => {
    if (window !== undefined) {
      callFetch({
        url: "/logout",
        method: "post",
      });
      localStorage.clear();
      window.location.reload();
    }
  }, [callFetch])
  return {
    session,
    userDetails,
    verifyToken,
    logout,
    login,
    forgetPassword,
    isLoading
  }
}



