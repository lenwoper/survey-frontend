import * as yup from 'yup';

export const resgisterValidation =yup.object({
Name:yup.string().required(),
email:yup.string().email().required('Email is Required'),
password: yup.string()
    .required("Password is required")
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
confirm_password:yup
.string()
.required('Please retype your password.')
.oneOf([yup.ref('password')], 'Your passwords do not match.')
});
export const loginValidation  = yup.object({
    email:yup.string().email().required(),
    password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});
export const forgetPasswordValidation = yup.object({
    email:yup.string().email("Please provide email ID").required(),
});

export const verifyOtpValidation = yup.object({
    otp:yup.string().min(6).max(8 , " Invalid size ").required()
})


