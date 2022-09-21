import React from 'react';
import { FormProvider, useForm, Controller } from 'react-hook-form';
import { TextInput, Button, Icon  } from 'components';
import { useNavigate } from 'react-router-dom';
import { RiLockPasswordLine } from 'react-icons/ri';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { verifyOtpValidation } from 'utils/validation';
// notification toaster 
import { logo1 } from 'Assets';
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
                <Icon className={'w-[120px] h-auto'} src={logo1} alt="loading..." />
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
