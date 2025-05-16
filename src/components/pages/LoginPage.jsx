import React, {useState, useEffect} from 'react'
import { signIn } from '../../services/authServices';

function LoginPage() {
  const [loginFormData, setLoginFormData] = useState({email: "default_email", password: "default_password"});

  function onChange(event)
  {
    setLoginFormData({...loginFormData, [event.target.name]: [event.target.value]})
  }

  async function onSubmit(event)
  {
    event.preventDefault();
    const email = loginFormData.email;
    const password = loginFormData.password;
    
    const resp = await signIn(email, password);
    console.log(resp);
  }





    return (
        <form >
            <input type='text' name='email' placeholder='email' value={loginFormData.email} onChange={onChange} className='border-2' />
            <input type='text' name='password' placeholder='password' value={loginFormData.password} onChange={onChange} className='border-2' />
            <input type='submit' name='submit' value={"submit"} onClick={onSubmit} className='border-2' />
        </form>
    )
}

export default LoginPage