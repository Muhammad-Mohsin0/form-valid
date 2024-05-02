import React, { useState } from 'react';
import Style from '../pages/Style.css';

const ReactForm =()=>{
    const [userName, setUserName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [Phone, setPhone]=useState("");


    return (
      
        <div className="container">
          <form >
              <h1>Form ReactHOOk</h1> <br />
        
              <input type="text" id='username' placeholder="username" />
              <input type="text" id='email' placeholder="email" />
              <input type="text" id='password' placeholder="password" />
              <input type="text" id='cell' placeholder="mobile " />
              <input type="submit" id='button' />

         </form>
        </div>
    )
}

export default ReactForm;