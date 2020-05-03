import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail('');
    setPassword('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sing in with your email and passowrd</span>

      <form onSubmit={handleSubmit}>
        <input
          name='email'
          type='email'
          onChange={handleEmailChange}
          value={email}
          required
        />
        <label>Email</label>

        <input
          name='password'
          type='password'
          onChange={handlePasswordChange}
          value={password}
          required
        />
        <label>Password</label>

        <input type='submit' value='Submit Form' />
      </form>
    </div>
  );
};

export default SignIn;
