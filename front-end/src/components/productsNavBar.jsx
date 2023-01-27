import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function NavBar(params) {
  const { userName } = params;
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

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
          Meus pedidos
        </button>

        <button
          data-testid="customer_products__element-navbar-user-full-name"
          to="/usuario"
          type="button"
        >
          { userName }
        </button>
        <button
          data-testid="customer_products__element-navbar-link-logout"
          to="/logout"
          type="button"
          onClick={ logout }
        >
          Sair
        </button>

      </nav>
    </header>
  );
}
