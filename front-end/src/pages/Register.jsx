import React, { useRef } from 'react';
import validationEmail from '../helpers/validationEmail';

export default function Register() {
  const dataRef = useRef({});

  const submit = (event) => {
    event.preventDefault('');
    const isValid = validationEmail(dataRef.current.email);
    console.log(isValid);
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
            onChange={ ({ target }) => { dataRef.current.name = target.value; } }
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
            onChange={ ({ target }) => { dataRef.current.email = target.value; } }
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
            onChange={ ({ target }) => { dataRef.current.password = target.value; } }
          />
        </label>
        <input
          type="submit"
          data-testid="common_register__input-password"
          value="CADASTRAR"
          onClick={ submit }
        />
      </form>
    </div>
  );
}
