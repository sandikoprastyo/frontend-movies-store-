import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';


function Header(props) {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [isLogin, setIsLogin] = React.useState(false);

  React.useEffect(() => {
    console.log(typeof(cookies.token));
    if (cookies.token !== undefined) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [cookies.token]);

  const handleLogut = () => {
    removeCookie('token', undefined)
    navigate('/login')
  };

  return (
    <div className='wrapper-header'>
      <div className='header'>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
          <Link to='/contact'>
            <li>Contact</li>
          </Link>
          <li>Subscribe Movie ({props.subscribe})</li>
        </ul>

        {isLogin ? (
          <ul>
            <li onClick={handleLogut}>Logut</li>
          </ul>
        ) : (
          <ul>
            <Link to='/login'>
              <li>Login</li>
            </Link>
            <Link to='/register'>
              <li>Register</li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
