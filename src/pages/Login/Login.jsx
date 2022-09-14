import React from 'react'
import { Button, TextInput, CheckBox } from 'components'
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FormProvider, useForm, Controller } from "react-hook-form";
export default function Login() {
  const methods = useForm({
    mode: "all"
  });
  const { control, handleSubmit,
    formState: { isDirty, isValid } } = methods;

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <React.Fragment>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
        <div className="" style={{ backgroundImage: "url(https://media.istockphoto.com/photos/abstract-wavy-object-picture-id1198271727?b=1&k=20&m=1198271727&s=170667a&w=0&h=b626WM5c-lq9g_yGyD0vgufb4LQRX9UgYNWPaNUVses=)" }}>

        </div>
        <div className="grid">
          <div className="m-auto lg:w-[75%] md:w-[80%] w-[90%]">
            <div className="card-body">
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
                          <TextInput type={"Email"} inputRef={field.ref} {...field} name={"email"} icon={<AiOutlineMail />} placeholder={"Email ID"} className={"w-full pl-6"} />
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
                    <label className="label">
                      <span className="label-text-alt link link-hover">Forgot password?</span>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <Button className={`w-full bg-primary-color`} text={`login`} isLoading={false} isDisabled={false}>Login</Button>
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
