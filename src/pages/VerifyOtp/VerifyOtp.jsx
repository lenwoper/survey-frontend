import React from 'react';
import { FormProvider, useForm, Controller } from 'react-hook-form';
import { TextInput, Button, Icon  } from 'components';
import { useNavigate } from 'react-router-dom';
import { RiLockPasswordLine } from 'react-icons/ri';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { verifyOtpValidation } from 'utils/validation';
// notification toaster 

export default function VerifyOtp() {
  const navigate = useNavigate();

  const methods = useForm({
    resolver:yupResolver(verifyOtpValidation),
    mode: 'all',
  })
  
  const { control, handleSubmit, formState: { isDirty, isValid } } = methods;
  const onSubmit = React.useCallback((data) => {
    toast.success('Forget password has been sent in '+data?.otp);
    console.log(data);
  }, []);

  return (
    <div>
      <div className='grid h-[90vh] '>
        <div className='m-auto'>
          <div className="card-body border-secondry-color border rounded-xl lg:w-[390px] md:w-[360px] w-full drop-shadow-sm " >
            <div className="grid">
              <div className="m-auto">
                <Icon className={'w-[120px] h-auto'} src="data:image/png;base64,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" alt="loading..." />
              </div>
            </div>

            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">OTP</span>
                  </label>
                  <span>
                    <Controller
                      control={control}
                      name="otp"
                      render={({
                        field,
                        fieldState: { invalid, isTouched, isDirty, error },
                      }) => (
                        <TextInput type={"string"} inputRef={field.ref} error={error} {...field} name={"otp"} icon={<RiLockPasswordLine />} placeholder={"VERIFY OTP"} className={"w-full pl-6"} />
                      )}
                    />
                  </span>
                  <label className="label">
                    <span className="label-text-alt link link-hover" onClick={() => navigate('/login')}>Back to  login ?</span>
                  </label>
                </div>
                <div className="form-control mt-2">
                  <Button className={`w-full bg-primary-color`} text={`login`} isLoading={false} isDisabled={!isDirty || !isValid}>Login</Button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  )
}
