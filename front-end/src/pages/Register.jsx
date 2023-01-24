import React, { useRef, useState, useEffect } from 'react';
import validationRegister from '../helpers/validationRegister';
import postRegister from '../services/postRegister';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitRef = useRef();

  useEffect(() => {
    const isValid = validationRegister({ name, email, password });
    submitRef.current.disabled = !isValid;
  }, [name, email, password]);

  const submit = (event) => {
    event.preventDefault('');
    postRegister();
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
          data-testid="common_register__input-password"
          value="CADASTRAR"
          ref={ submitRef }
          disabled
          onClick={ submit }
        />
      </form>
    </div>
  );
}
