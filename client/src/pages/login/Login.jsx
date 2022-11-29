import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  return (
    <div className='login'>
      <div className='lContainer'>
        <input
          type='text'
          placeholder='username'
          id='username'
          className='lInput'
        />
        <input
          type='password'
          placeholder='password'
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
