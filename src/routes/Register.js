import React from 'react';
import '../../src/assets/App.scss';
import { Header } from '../components';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [fullname, setFullName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('');

  const [error, setError] = React.useState('');

  const isEmail = (val) => {
    let regex =
      // eslint-disable-next-line no-useless-escape
      /^([A-Za-z][A-Za-z0-9\-\.\_]*)\@([A-Za-z][A-Za-z0-9\-\_]*)(\.[A-Za-z][A-Za-z0-9\-\_]*)+$/;
    return regex.test(val);
  };

  const handleRegister = () => {
    if (fullname === '' && email === '' && password === '' && passwordConfirmation === '') {
      setError('field cannot be empty');
    }else if (fullname === '') {
      setError('Name required');
    } else if (email === '') {
      setError('Email required');
    } else if (password === '') {
      setError('Password required');
    }else if (passwordConfirmation === '') {
      setError('Password Confirm required');
    } else if (isEmail(email)) {
      setError('');

      const data = {
        name: fullname,
        email: email,
        phone: phone,
        password: password,
        password_confirmation: passwordConfirmation,
      };

      axios
        .post('http://localhost:5000/signup', data)
        .then((res) => {
          if (res.data.code === 200) {
            alert('Register sukses');
          }
        })
        .catch((err) => {
          setError(err.message);
        });
    }
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
          <input
            type='text'
            value={passwordConfirmation}
            placeholder='Password'
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          {error}
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
