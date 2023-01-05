import React,{useState} from 'react'

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
        });
        const { name, email, password, confirmPassword } = user;
        const onChange = e => {
            return setUser({
                ...user,
                [e.target.name]: e.target.value
            });
        }

  return (
    <div className='container register'>
    <form className='m-auto w-80'>
    <input type="text" name='name' value={name} onChange={onChange}  placeholder="name"/>
    <input type="email" name='email' value={email}  onChange={onChange} placeholder="email"/>
    <input type="password" name='password'  value={password} onChange={onChange} placeholder="password"/>
    <input type="password" name='confirmPassword' value={confirmPassword} onChange={onChange} placeholder="confirm password"/>
    <button className='btn-main'>Register</button>
    </form>
    </div>
  )
}

export default Register