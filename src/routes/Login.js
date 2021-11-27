import React from 'react';
import '../../src/assets/App.scss';
import { Header } from '../components';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    console.log(email);
    console.log(password);
  };

  return (
    <React.Fragment>
      <Header />
      <div className='App'>
        <div className='wrapper-form'>
          <h1>Login</h1>
          <input
            type='text'
            value={email}
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type='text'
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='wrapper-button'>
            <button className='login' onClick={handleLogin}>
              Login
            </button>
            <button className='regis'>
              <Link to='/register' className='regis'>Register</Link>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
