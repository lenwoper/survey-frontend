import React from 'react'
import { Button, TextInput, CheckBox, Icon } from 'components'
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FormProvider, useForm, Controller } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { resgisterValidation } from 'utils/validation';
import backgroundSignup from 'Assets/background.png';
import logo1 from 'Assets/admin-logo-01.png'
import { useAuth } from 'hooks';
export default function Signup() {
  const { signup, hasError ,  isLoading} = useAuth();
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
  const { control, handleSubmit,setError ,
    formState: { isDirty, isValid } } = methods;
  const onSubmit = React.useCallback((data) => {
    signup(data);
  }, [signup])

  React.useEffect(() => {
    setError('email',hasError);
  }, [hasError, setError])

  return (
    <React.Fragment>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 h-[100vh] grid-cols-1'>
        <div className="lg:inline  hidden " style={{ backgroundImage: `url(${backgroundSignup})` }}>
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
                      <span className="label-text">Name</span>
                    </label>
                    <span>
                      <Controller
                        control={control}
                        name="Name"
                        render={({
                          field,
                          fieldState: { invalid, isTouched, isDirty, error },
                        }) => (
                          <TextInput type={"text"} inputRef={field.ref} error={error} {...field} name={"Name"} icon={<AiOutlineMail />} placeholder={"Name "} className={"w-full pl-6"} />
                        )}
                      />
                    </span>
                  </div>
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
                          <TextInput type={"Email"} inputRef={field.ref} error={error } {...field} name={"email"} icon={<AiOutlineMail />} placeholder={"Email ID"} className={"w-full pl-6"} />
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
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <span>
                      <Controller
                        control={control}
                        name="confirm_password"
                        render={({
                          field,
                          fieldState: { invalid, isTouched, isDirty, error },
                        }) => (
                          <TextInput {...field} type={"password"} inputRef={field.ref} error={error} name={"confirm_password"} icon={<RiLockPasswordLine />} placeholder={"Confirm Password"} className={"w-full pl-6"} />
                        )}
                      />
                    </span>
                    <div className="flex  justify-between">
                      <label className="label">
                        <span className="label-text-alt link link-hover" onClick={() => navigate('/login')}>Have aleardy account ?</span>
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
                    <Button className={`w-full bg-primary-color`} text={`login`} isLoading={isLoading} isDisabled={!isDirty || !isValid}>SIGN UP</Button>
                  </div>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
