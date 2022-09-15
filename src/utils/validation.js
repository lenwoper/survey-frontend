import * as yup from 'yup'


export const resgisterValidation =yup.object({
name:yup.string().required(),
email:yup.string().email().required(),
password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

export const loginValidation  = yup.object({
    email:yup.string().email(),
    password:yup.string().required(),
});
export const forgetPasswordValidation = yup.object({
    email:yup.string().email().required(),
});

