import React from 'react';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { resgisterValidation } from 'utils/validation';
import { useForm } from 'react-hook-form';
import {useFetch} from 'hooks';
import toast from 'react-hot-toast';
export const useRegister =()=>{
const navigate = useNavigate();
const methods = useForm({
  resolver: yupResolver(resgisterValidation),
  mode: "all",
  defaultValues: {
    Name: "",
    email: "",
    password: "",
    confirm_password: "",
  }
});

  const onSuccess = React.useCallback((response) => {
  navigate('/verify-otp')
  }, [ navigate]);

  const onFailure = React.useCallback((errors) => {
    toast.error(errors.msg);
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
    data: formData,
  });
}, [callFetch])


return {
  isLoading,
  signup ,
  methods
}
}