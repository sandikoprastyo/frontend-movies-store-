import React from 'react';
import '../../src/assets/App.scss';
import { Header } from '../components';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [fullname, setFullName] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const handleRegister = () => {
    console.log(email);
    console.log(password);
  };

  return (
    <React.Fragment>
      <Header />
      <div className='App'>
        <div className='wrapper-form'>
          <h1>Register</h1>
          <input
            type='text'
            value={fullname}
            placeholder='Fullname'
            onChange={(e) => setFullName(e.target.value)}
          />

          <input
            type='text'
            value={email}
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='text'
            value={phone}
            placeholder='phone'
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type='text'
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='wrapper-button'>
            <button className='login'>
              <Link to='/login' className='login'>
                Login
              </Link>
            </button>
            <button className='regis' onClick={handleRegister}>
              Register
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
