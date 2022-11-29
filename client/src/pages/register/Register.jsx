import './register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { loginSuccess } from '../../redux/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/auth/register', {
        username,
        email,
        password,
        phone,
        city,
        country,
      });
      setUsername('');
      setEmail('');
      setPassword('');
      setPhone('');
      setCity('');
      setCountry('');

      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='register'>
      <div className='rContainer'>
        <form onSubmit={handleSignup} className='lContainer'>
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
        </form>
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
