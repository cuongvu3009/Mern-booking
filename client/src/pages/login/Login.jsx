import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='login'>
      <div className='lContainer'>
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
        <button className='lButton'>Login</button>
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
