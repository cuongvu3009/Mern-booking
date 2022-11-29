import './register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  return (
    <div className='register'>
      <div className='rContainer'>
        <input
          type='text'
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
          id='username'
          className='rInput'
        />
        <input
          type='email'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
          id='email'
          className='rInput'
        />
        <input
          type='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
          id='password'
          className='rInput'
        />
        <br />
        <h3>Required Information</h3>
        <input
          type='text'
          placeholder='phone'
          onChange={(e) => setPhone(e.target.value)}
          id='phone'
          className='rInput'
        />
        <input
          type='text'
          placeholder='city'
          onChange={(e) => setCity(e.target.value)}
          id='city'
          className='rInput'
        />
        <input
          type='text'
          placeholder='country'
          onChange={(e) => setCountry(e.target.value)}
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
