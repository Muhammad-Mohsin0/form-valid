import React from "react";
import { useForm } from "react-hook-form";
import "../pages/Style.css";

const ReactForm = () => {
  const { register, handleSubmit,setError, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try{
      await new Promise ((resolve)=> setTimeout(resolve,1000));
      throw new Error();
      console.log(data);
    } catch(error){
      setError("email", {
        message :"This email is already taken",
      })
    }
  
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Form ReactHOOk</h1> <br />

        <input
          {...register("username", {
            required: "Username is required",
            pattern: {
              value: /^[a-zA-Z]+_.*$/,
              message: "Username must include ( _ )"
            }
          })}
          type="text"
          id="username"
          placeholder="username"
        />
        {errors.username && <div className="errors">{errors.username.message}</div>}

        <input
          {...register("email", {
            required: "Email is required",
            pattern:{
              value :/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message : "Email must include @ and ( . )"
            } 
              
          })}
          type="text"
          id="email"
          placeholder="email"
        />
        {errors.email && <div className="errors">{errors.email.message}</div>}

        <input
          {...register("password", {
            required: "Password is required",
            pattern: {
              value : /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/,
              message: "One must Capital, Digit and symbol, min 8"
            }
          })}
          type="password"
          id="password"
          placeholder="password"
        />
        {errors.password && <div className="errors">{errors.password.message}</div>}

        <input
          {...register("mobile", {
            required: "Phone # is required",
            pattern: {
              value : /^[0-9]{11,}$/,
              message : "Digits and min 11"}
          })}
          type="text"
          id="cell"
          placeholder="mobile "
        />
        {errors.mobile && <div className="errors">{errors.mobile.message}</div>}

        <button disabled={isSubmitting} type="submit" id="button" > {isSubmitting ? "Loading ..." :"Submit"}</button>
      </form>
    </div>
  );
};

export default ReactForm;
