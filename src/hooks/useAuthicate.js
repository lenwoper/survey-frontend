import React from "react";
import { useLocalStorage } from './useLocalStorage';
/**
 *  session 
 * isloading login
 * signup 
 * verify otp 
 * reset password 
 * logout 
 * 
 */
export const useAuth = () => {
  const { getData } = useLocalStorage()
  const [hasError, SetHasError] = React.useState(null);
  
  const Success = React.useCallback((response)=>{

  });
  const Failed = React.useCallback((errors)=>{
    SetHasError(errors)
  });
  const signup = React.useCallback((data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.name);
    formData.append('password', data.password);

  }, [])

  const login = React.useCallback((data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('password', data.password);
    // useFetch api 

  }, [])





  return {
    session: getData,
    signup,
    login,
    hasError

  }
}



