import * as yup from 'yup'

const userSchema =yup.object({
    username:yup.string().required("username is required").matches(/[_]/, "Please (_) is required  "),
    email:yup.string().required("email is required").matches(/[@]/, "Required '@'").email(),
    password:yup.string().required("Password is required").matches(/[0-9]/,"You must enter at least one number.")
    .matches(/[a-z]/,"You must enter at least one lowercase letter.")
    .matches(/[A-Z]/,"You must enter at least one Uppercase letter.")
    .matches(/[#?!@$%^&*-]/, "You must enter at least one symbols.").min(8),
    mobile:yup.string().required("Phone number is required").min(11).max(14)
    
}).required();

export default userSchema;