import userSchema from '../components/yupUser';
import  '../pages/Style.css'

function Formyup (){

    const createUser = async(event)=>{
        event.preventDefault();
        let formData ={
            name: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
            phone: event.target[3].value,
        }
        const validData = await userSchema.isValid(formData)
        console.log(validData)
    }
    return (

        <div className="container">
          <form onSubmit={createUser}>
              <h1>Form YUP</h1> <br />
        
              <input type="text" id='username' placeholder="username" />
              <input type="text" id='email' placeholder="email" />
              <input type="text" id='password' placeholder="password" />
              <input type="text" id='cell' placeholder="mobile " />
              <input type="submit" id='button' />

         </form>
        </div>
        

    )
}

export default Formyup;