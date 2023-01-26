import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link
            className="list-products"
            data-testid="customer_products__element-navbar-link-products"
            to="/products"
          >
            Produtos
          </Link>
        </li>
        <li>
          <Link
            className="list-pedidos"
            data-testid="customer_products__element-navbar-link-orders"
            to="/pedidos"
          >
            Pedidos
          </Link>
        </li>
        <li>
          <Link
            className="perfil-usuario"
            data-testid="customer_products__element-navbar-user-full-name"
            to="/usuario"
          >
            Usuário
          </Link>
        </li>
        <li>
          <Link
            className="exit"
            data-testid="customer_products__element-navbar-link-logout"
            to="/logout"
          >
            Sair
          </Link>
        </li>
      </ul>
    </nav>

  );
}
