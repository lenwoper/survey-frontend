import React from 'react'
import { Button, TextInput, CheckBox, Icon } from 'components'
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FormProvider, useForm, Controller } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidation } from 'utils/validation';
import logo1 from 'Assets/admin-logo-01.png';
import background2 from 'Assets/admin-bg.png';
import { useAuth } from 'hooks';
export default function Login() {
  const navigate = useNavigate();
  const { login, hasError ,  isLoading}= useAuth();
  const methods = useForm({
    resolver: yupResolver(loginValidation),
    mode: "all"
  });
  const { control, handleSubmit,setError ,
    formState: { isDirty, isValid }
   } = methods;

  const onSubmit = React.useCallback((data)=>{
    login(data);
  } , [login]);

  React.useEffect(()=>{
    setError('email', hasError );
  } , [setError , hasError])
  return (
    <React.Fragment>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 h-[100vh] grid-cols-1'>
        <div className="lg:inline hidden" style={{ backgroundImage: `url(${background2})` }}>
        </div>
        <div className="grid">
          <div className="m-auto lg:w-[75%] md:w-[80%] w-[90%]">
            <div className="card-body">
              <div className="grid">
                <div className="m-auto">
                  <Icon className={'w-[120px] h-auto'} src={logo1} alt="loading..." />
                </div>
              </div>
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <span>
                      <Controller
                        control={control}
                        name="email"
                        render={({
                          field,
                          fieldState: { invalid, isTouched, isDirty, error },
                        }) => (
                          <TextInput type={"Email"} error={error} inputRef={field.ref} {...field} name={"email"} icon={<AiOutlineMail />} placeholder={"Email ID"} className={"w-full pl-6"} />
                        )}
                      />
                    </span>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <span>
                      <Controller
                        control={control}
                        name="password"
                        render={({
                          field,
                          fieldState: { invalid, isTouched, isDirty, error },
                        }) => (
                          <TextInput {...field} type={"password"} inputRef={field.ref} error={error} name={"password"} icon={<RiLockPasswordLine />} placeholder={"Password"} className={"w-full pl-6"} />
                        )}
                      />
                    </span>
                    <div className="flex  justify-between">
                      <label className="label">
                        <span className="label-text-alt link link-hover" onClick={() => navigate('/forget-password')}>Forgot password?</span>
                      </label>
                      <div className="flex justify-between">
                        <div className="">
                          <span className="text-xs">Rember me </span>
                        </div>
                        <div className="pt-1 pl-1">
                          <Controller
                            control={control}
                            name="remberme"
                            render={({
                              field,
                              fieldState: { invalid, isTouched, isDirty, error },
                            }) => (
                              <CheckBox {...field} inputRef={field.ref} name={"remberme"} className={`checkbox-sm`} />
                            )}
                          />
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="form-control mt-6">
                    <Button className={`w-full bg-primary-color`} text={`login`} isLoading={isLoading}
                     isDisabled={!isDirty || !isValid}
                     >Login</Button>
                  </div>
                </form>
              </FormProvider>
              <br />
              <br />
              <br />
              <div classsName="pt-"><span className='prose-sm'>Create New <span className="cursor-pointer underline text-primary-color" onClick={() => navigate('/signup')}>Account</span> ?</span></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
