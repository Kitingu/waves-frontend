import React,{useState,useContext} from 'react'
import "./styles.scss"
import AuthContext from "../../../context/auth/authContext"

const Login =()=> { 
        console.log("tupo site")
        const authContext = useContext(AuthContext);
        const { login } = authContext;

    const [user, setUser] = useState({
        username: "",
        password: "",
        });

        const { username, password } = user;
        const onChange = e => setUser({
                ...user,
                [e.target.name]: e.target.value
            })

        const onSubmit = e => {

            e.preventDefault();
            login({
                username,
                password
            })
        }

  return (
    <div className='container login'>
    <form className='relative m-auto flex flex-col justify-center w-fit '>
    <h1 className='text-2xl'>Login</h1>
    <input  type="text" name='username' value={username} onChange={onChange} placeholder="username"/>
    <input  type="password" name='password' value={password} onChange={onChange} placeholder="password"/>
    <button type='submit'  className='btn-main bg-slate-600 text-white ' onClick={onSubmit} >Login</button>
    </form>
    
    </div>
  )
}

export default Login