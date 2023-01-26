import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DeliveryContext from '../context/DeliveryContext';

export default function LoginForm() {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);
  /* const [logIn, setLogIn] = useState({ status: false }); */
  const { setLocalStorage, setUser } = useContext(DeliveryContext);

  async function sendLoginForm(email, password) {
    const inputData = {
      email,
      password,
    };
    const response = await axios.post('http://localhost:3001/login', inputData);
    const { data } = response;
    return data;
  }

  const buttonValidation = () => {
    const val = /\S+@\S+\.\S+/;
    const validationEmail = val.test(loginEmail);
    const SIX = 6;
    return !(validationEmail && loginPassword.length >= SIX);
  };

  return (
    <form>
      <label htmlFor="email">
        <span>Login</span>
        <input
          type="email"
          id="email"
          placeholder="email@trybeer.com.br"
          data-testid="common_login__input-email"
          onChange={ ({ target }) => {
            setLoginEmail(target.value);
          } }
        />
      </label>

      <label htmlFor="password">
        <span>Senha</span>
        <input
          type="password"
          id="password"
          data-testid="common_login__input-password"
          onChange={ ({ target }) => {
            setLoginPassword(target.value);
          } }
        />
      </label>

      <button
        type="button"
        data-testid="common_login__button-login"
        disabled={ buttonValidation() }
        onClick={ async () => {
          try {
            const user = await sendLoginForm(loginEmail, loginPassword);
            console.log(user);
            setUser(user);
            setLocalStorage('user', user);
            if (user.role === 'seller') return navigate('/seller/orders');
            if (user.role === 'administrator') return navigate('/admin/manage');
            return navigate('/customer/products');
          } catch (error) { setInvalidEmail(true); }
        } }
      >
        Login
      </button>

      <button
        data-testid="common_login__button-register"
        type="button"
        onClick={ () => navigate('/register') }
      >
        Ainda não tenho conta
      </button>
      { invalidEmail
        && <span data-testid="common_login__element-invalid-email">Invalid email</span>}
    </form>
  );
}
