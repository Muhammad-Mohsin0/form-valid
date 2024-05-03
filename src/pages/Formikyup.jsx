import React from 'react'
import { useFormik } from 'formik';
import userSchema from '../components/yupUser';

const initialValues ={
  username: "",
  email:"",
  password: "",
  mobile:"",
}

function Formikyup() {

 const {values ,errors,touched ,handleBlur,handleChange,handleSubmit}= useFormik({
    initialValues: initialValues,
    validationSchema : userSchema,
    onSubmit:(values , action)=>{
      console.log(values)

      action.resetForm()

    }
 })
//  console.log(errors)

  return (
        
    <div className="container">
    <form onSubmit={handleSubmit}>
        <h1>Formik + yup</h1> <br />
  
        <input type="text" name='username' id='username' placeholder="username" 
        value={values.username} 
        onChange={handleChange} 
        onBlur={handleBlur}/>
        {errors.username && touched.username ? (<div className='errors'>{errors.username}</div>) : null} 

        <input type="text" name='email' id='email' placeholder="email"
        value={values.email} 
        onChange={handleChange} 
        onBlur={handleBlur} />
        {errors.email && touched.email ? (<div className='errors'>{errors.email}</div>) : null} 

        
        <input type="text" name='password' id='password' placeholder="password"
        value={values.password} 
        onChange={handleChange} 
        onBlur={handleBlur} />
        {errors.password && touched.password ? (<div className='errors'>{errors.password}</div>) : null} 
       
        <input type="text" name='mobile' id='mobile' placeholder="mobile "
        value={values.mobile} 
        onChange={handleChange} 
        onBlur={handleBlur} />
        {errors.mobile && touched.mobile ? (<div className='errors'>{errors.mobile}</div>) : null}  
    

        <button type="submit" id="button" >Submit</button>

   </form>
  </div>
  )
}

export default Formikyup;
