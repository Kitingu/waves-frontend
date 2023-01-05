import React,{useState} from 'react'
import "./styles.scss"

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        });
        const { email, password } = user;
        const onChange = e => {
            return setUser({
                ...user,
                [e.target.name]: e.target.value
            });
        }


  return (
    <div className='login'>
    <form className='relative m-auto flex flex-col justify-center w-fit '>
    <h1 className='text-2xl'>Login</h1>


    <input  type="email" placeholder="email"/>
    <input  type="password" placeholder="password"/>
   
    <button className='btn-main bg-slate-600 text-white'>Login</button>
    </form>
    
    </div>
  )
}

export default Login