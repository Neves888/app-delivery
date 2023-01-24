import React, { useState, useEffect } from 'react';
import validationRegister from '../helpers/validationRegister';
import postRegister from '../services/postRegister';

const ERROR_ID = 'common_register__element-invalid_register';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enable, setEnable] = useState(true);
  // const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    const isValid = validationRegister({ name, email, password });
    setEnable(!isValid);
  }, [name, email, password]);

  const submit = async (event) => {
    event.preventDefault();
    console.log('axios...');
    await postRegister({ name, email, password });
  };

  return (
    <div>
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
            onChange={ ({ target }) => { setPassword(target.value); } }
          />
        </label>
        <input
          type="submit"
          data-testid="registerPage.button.register.default"
          value="CADASTRAR"
          disabled={ enable }
          onClick={ submit }
        />
      </form>
      <div data-testis={ ERROR_ID }>
        {}
      </div>
    </div>
  );
}
