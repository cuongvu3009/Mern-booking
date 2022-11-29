import './register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='register'>
      <div className='rContainer'>
        <input
          type='text'
          placeholder='username'
          id='username'
          className='rInput'
        />
        <input type='email' placeholder='email' id='email' className='rInput' />
        <input
          type='password'
          placeholder='password'
          id='password'
          className='rInput'
        />
        <br />
        <h3>Required Information</h3>
        <input type='text' placeholder='phone' id='phone' className='rInput' />
        <input type='text' placeholder='city' id='city' className='rInput' />
        <input
          type='text'
          placeholder='country'
          id='country'
          className='rInput'
        />
        <button className='rButton'>Register</button>
        <p>
          Already a member? <Link to='/login'>Login</Link>
        </p>
        <p>
          Just looking around? <Link to='/'>Back home</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
