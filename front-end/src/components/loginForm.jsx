import React, { useState } from 'react';
import axios from 'axios';
/* import { Context as LoginContext } from '../context/Provider'; */
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  /* const api = axios.create({
    baseURL: 'https://localhost:3001/',
  }); */

  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [logIn, setLogIn] = useState({ status: false });
  /* const { setLoginForm } = useContext(LoginContext); */

  async function sendLoginForm() {
    /* const formLogin = { login: loginEmail, password: loginPassword }; */
    const inputData = {
      email: loginEmail,
      password: loginPassword,
    };
    try {
      const response = await axios.post('http://localhost:3001/login', inputData);
      const { data } = response;
      if (response.error === 'User not found') setInvalidEmail(true);
      setLogIn({ status: true, data });
      console.log(logIn);
    } catch (error) { console.log(error.message); }
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
        onClick={ () => {
          sendLoginForm();
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
