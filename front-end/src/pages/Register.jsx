import React from 'react';

export default function Register() {
  const submit = (event) => {
    event.preventDefault();
  };

  return (
    <form>
      <label
        htmlFor="name"
      >
        Nome
        <input
          type="text"
          data-testid="common_register__input-name"
          id="name"
        />
      </label>
      <label
        htmlFor="email"
      >
        Email
        <input
          type="email"
          data-testid=""
          id="email"
        />
      </label>
      <label
        htmlFor="password"
      >
        Senha
        <input
          type="password"
          id="password"
        />
      </label>
      <input
        type="submit"
        value="CADASTRAR"
        onClick={ submit }
      />
    </form>
  );
}
