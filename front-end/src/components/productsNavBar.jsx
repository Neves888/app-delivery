import React from 'react';
// import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header>
      <nav>
        <button
          data-testid="customer_products__element-navbar-link-products"
          to="/products"
          type="button"
        >
          Produtos
        </button>

        <button
          data-testid="customer_products__element-navbar-link-orders"
          to="/pedidos"
          type="button"
        >
          Pedidos
        </button>

        <button
          data-testid="customer_products__element-navbar-user-full-name"
          to="/usuario"
          type="button"
        >
          Usuário
        </button>
        <button
          data-testid="customer_products__element-navbar-link-logout"
          to="/logout"
          type="button"
        >
          Sair
        </button>

      </nav>
    </header>
  );
}
