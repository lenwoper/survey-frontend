import React from 'react'
import { Button, TextInput, CheckBox , Icon } from 'components'
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FormProvider, useForm, Controller } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidation } from 'utils/validation';

export default function Login() {
  const navigate = useNavigate()
  const methods = useForm({
    resolver:yupResolver(loginValidation),
    mode: "all"
  });
  const { control, handleSubmit,
    formState: { isDirty, isValid } } = methods;

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <React.Fragment>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 h-[90vh] grid-cols-1'>
        <div className="" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80)" }}>

        </div>
        <div className="grid">
          <div className="m-auto lg:w-[75%] md:w-[80%] w-[90%]">
            <div className="card-body">
              <div className="grid">
                <div className="m-auto">
                  <Icon className={'w-[120px] h-auto'} src="data:image/png;base64,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" alt="loading..."/>
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
                        <span className="label-text-alt link link-hover" onClick={()=>navigate('/forget-password')}>Forgot password?</span>
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
                          <CheckBox {...field}  inputRef={field.ref}  name={"remberme"} className={`checkbox-sm`}  />
                        )}
                      />
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="form-control mt-6">
                    <Button className={`w-full bg-primary-color`} text={`login`} isLoading={false} isDisabled={!isDirty || !isValid }>Login</Button>
                  </div>
                </form>
              </FormProvider>
              <br/>
              <br/>
              <br/>
              <div classsName="pt-"><span className='prose-base'>Create New <span className="cursor-pointer underline text-primary-color" onClick={()=>navigate('/signup')}>Account</span> ?</span></div>
            </div>
           
          </div>
          
        </div>
      </div>
    </React.Fragment>
  )
}
