import * as yup from 'yup'

const userSchema =yup.object().shape({
    name:yup.string().matches(/[_]/, "Please (_) is required  ").required("Name is required") ,
    email:yup.string().email("Required '@' and '.'").required("Email is required"),
    password:yup.string().min(8).matches(/[0-9]/,"You must enter at least one number.")
    .matches(/[a-z]/,"You must enter at least one lowercase letter.")
    .matches(/[A-Z]/,"You must enter at least one Uppercase letter.")
    .matches(/[#?!@$%^&*-]/, "You must enter at least one symbols.")
    .required("Password is required"),
    phone:yup.string().min(11).required("Phone number is required"),
})

export default userSchema;