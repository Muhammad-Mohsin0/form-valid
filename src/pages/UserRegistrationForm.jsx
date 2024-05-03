import React from "react";
import '../pages/Style.css'
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

const userSchema =yup.object({
    username:yup.string().required("username is required").matches(/[_]/, "Please (_) is required  "),
    email:yup.string().required("email is required").matches(/[@]/, "Required '@'").email(),
    password:yup.string().required("Password is required").matches(/[0-9]/,"You must enter at least one number.")
    .matches(/[a-z]/,"You must enter at least one lowercase letter.")
    .matches(/[A-Z]/,"You must enter at least one Uppercase letter.")
    .matches(/[#?!@$%^&*-]/, "You must enter at least one symbols.").min(8),
    mobile:yup.string().required("Phone number is required").min(11).max(14)
}).required();

const UserRegistrationForm =()=>{
    const {register,handleSubmit,formState:{errors,isSubmitting},}= useForm({resolver:yupResolver(userSchema)})

    const onSubmit =async values =>{
        await new Promise ((resolve)=> setTimeout(resolve,1000));  
        console.log(values)
    } 
    return (
      
            
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
              <h1>Form React Hook + yup</h1> <br />
        
              <input {...register("username")} type="text" id='username' placeholder="username" />
              {errors.username && ( <div className="errors">{errors.username.message}</div>)}

              <input {...register("email")} type="text" id='email' placeholder="email" />
              {errors.email && (<div className="errors">{errors.email.message}</div>)}

              <input {...register("password")} type="text" id='password' placeholder="password" />
              {errors.password && (<div className="errors">{errors.password.message}</div>)}

              <input {...register("mobile")} type="text" id='mobile' placeholder="mobile " />
              {errors.mobile && (<div className="errors">{errors.mobile.message}</div>)}

              <button disabled={isSubmitting} type="submit" id="button" > {isSubmitting ? "Loading ..." :"Submit"}</button>

         </form>
        </div>
       

    )
}

export default UserRegistrationForm;