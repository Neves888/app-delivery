import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import validationRegister from '../helpers/validationRegister';
import postRegister from '../services/postRegister';

import '../style/Register.css';

const ERROR_ID = 'common_register__element-invalid_register';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enable, setEnable] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const [submitButtonColor, setSubmitButtonColor] = useState('rgb(211, 211, 211)');

  const navigate = useNavigate();

  useEffect(() => {
    const isValid = validationRegister({ name, email, password });
    setEnable(!isValid);
    if (isValid) {
      setSubmitButtonColor('rgb(3, 107, 82)');
    } else { setSubmitButtonColor('rgb(211, 211, 211)'); }
  }, [name, email, password]);

  const submit = async (event) => {
    event.preventDefault();
    try {
      await postRegister({ name, email, password });
      navigate('/customer/products');
    } catch (error) {
      setErrorMessage(true);
    }
  };

  return (
    <div className="root">
      <div className="main">
        <h2>Cadastro</h2>
        <form>
          <label
            htmlFor="name"
          >
            Nome
            <input
              type="text"
              data-testid="common_register__input-name"
              id="name"
              value={ name }
              placeholder="Seu nome"
              onChange={ ({ target }) => { setName(target.value); } }
            />
          </label>
          <label
            htmlFor="email"
          >
            Email
            <input
              type="email"
              data-testid="common_register__input-email"
              id="email"
              value={ email }
              placeholder="seu-email@site.com.br"
              onChange={ ({ target }) => { setEmail(target.value); } }
            />
          </label>
          <label
            htmlFor="password"
          >
            Senha
            <input
              type="password"
              data-testid="common_register__input-password"
              id="password"
              value={ password }
              placeholder="*********"
              onChange={ ({ target }) => { setPassword(target.value); } }
            />
          </label>
          <button
            type="submit"
            data-testid="common_register__button-register"
            disabled={ enable }
            style={ {
              backgroundColor: submitButtonColor,
            } }
            onClick={ submit }
          >
            CADASTRAR
          </button>
        </form>
      </div>
      {
        errorMessage
          ? <div data-testid={ ERROR_ID }>Menssagem de erro</div>
          : <div> </div>
      }
    </div>
  );
}
