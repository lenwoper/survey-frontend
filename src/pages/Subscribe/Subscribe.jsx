import React from 'react';
import { TextInput, Button } from 'components';
import { AiOutlineMail } from 'react-icons/ai';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm, Controller } from 'react-hook-form';
import { subscribeValidation } from 'utils/validation';
import toast from 'react-hot-toast';
import { useFetch } from 'hooks';
const Subscribe = () => {

  const methods = useForm({
    resolver: yupResolver(subscribeValidation),
    defaultValues: {
      email: ''
    }
  })
  const onFailure = React.useCallback((response) => {
    toast.error(response.msg, {
      duration: '6000'
    })
  }, [])
  const onSuccess = React.useCallback((response) => {
    toast.success(response.msg, {
      duration: '6000'
    });
  }, [])
  const { isLoading, callFetch } = useFetch({
    initialUrl: '',
    skipOnStart: true,
    onSuccess,
    onFailure
  })




  const { control, handleSubmit } = methods;
  const onSubmit = React.useCallback((data) => {
    const formData = new FormData();
    callFetch({
      url: "/login/",
      method: "post",
      data: [formData],
    })
  }, [callFetch])

  return (
    <div>
      <div className="grid h-92VH">
        <div className="m-auto rounded-md bg-#D9D9D9 pt-3 pb-7 lg:w-[50%] md:w-[60%] w-[95%]">
          <div className="lg:p-4 md:p-3 p-3">
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className='text-center lg:text-4xl md:text-4xl text-xl  font-bold pb-2 text-primary-color'>SUBSCRIBE TO OUR NEWSLETTER</h3>
                <div className="grid grid-cols-8">
                  <div className="col-span-6">
                    <Controller
                      control={control}
                      name="email"
                      render={({
                        field,
                        fieldState: { invalid, isTouched, isDirty, error },
                      }) => (
                        <TextInput type={"Email"}
                          error={error}
                          inputRef={field.ref}
                          {...field}
                          name={"email"}
                          icon={<AiOutlineMail />}
                          placeholder={"Email ID"} className={"w-full pl-6"}
                        />
                      )}
                    />
                  </div>
                  <div className="col-span-2 px-1  ">
                    <Button className={`w-full bg-primary-color`} isLoading={isLoading}>{'SUBCRIBE'}</Button>
                  </div>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Subscribe;
