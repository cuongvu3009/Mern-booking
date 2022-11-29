import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginSuccess, loginFailure, loginStart } from '../../redux/userSlice';
import axios from 'axios';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post('/api/v1/auth/login', {
        username,
        password,
      });
      setUsername('');
      setPassword('');
      dispatch(loginSuccess(res.data));
      setTimeout(() => {
        navigate('/');
      }, 200);
    } catch (error) {
      dispatch(loginFailure());
      console.log(error);
    }
  };

  return (
    <div className='login'>
      <div className='lContainer'>
        <form onSubmit={handleLogin} className='lContainer'>
          <input
            type='text'
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)}
            id='username'
            className='lInput'
          />
          <input
            type='password'
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
            id='password'
            className='lInput'
          />
          <button className='lButton' type='submit'>
            Login
          </button>
        </form>

        <p>
          New member? <Link to='/register'>Register</Link>
        </p>
        <p>
          Just looking around? <Link to='/'>Back home</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
