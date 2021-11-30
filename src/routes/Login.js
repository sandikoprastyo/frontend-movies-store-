import React from 'react';
import '../../src/assets/App.scss';
import { Header } from '../components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';

function Login() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const isEmail = (val) => {
    let regex =
    // eslint-disable-next-line no-useless-escape
    /^([A-Za-z][A-Za-z0-9\-\.\_]*)\@([A-Za-z][A-Za-z0-9\-\_]*)(\.[A-Za-z][A-Za-z0-9\-\_]*)+$/;
    return regex.test(val);
  };
  
  const handleLogin = () => {
     if (email === '' && password === '') {
       setError('field cannot be empty');
     } else if (email === '') {
       setError('Email required');
     } else if (password === '') {
       setError('Password required');
     } else if (isEmail(email)) {
       setError('')
       const data = {
         email: email,
         password: password,
       };
  
       axios.post('http://localhost:5000/signin', data)
         .then((res) => {
           if (res.data.code === 200) {
             setCookie('token', res.data.token)
             navigate('/')
           }
         }).catch((err) => {
           setError(err.message)
         })
     }
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
          {error}
          <div className='wrapper-button'>
            <button className='login' onClick={handleLogin}>
              Login
            </button>
            <button className='regis'>
              <Link to='/register' className='regis'>
                Register
              </Link>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
