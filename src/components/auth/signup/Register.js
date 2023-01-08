import React, { useState } from 'react';

function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { name, email, password, confirmPassword } = user;
  const onChange = (e) =>
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  return (
    <div className='container register'>
      <form className='m-auto w-80'>
        <h1 className='m-auto text-2xl'>Register</h1>
        <input type='text' name='name' value={name} onChange={onChange} placeholder='name' />
        <input type='email' name='email' value={email} onChange={onChange} placeholder='email' />
        <input
          type='password'
          name='password'
          value={password}
          onChange={onChange}
          placeholder='password'
        />
        <input
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={onChange}
          placeholder='confirm password'
        />
        <button className='btn-main'>Register</button>
      </form>
    </div>
  );
}

export default Register;
