import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-3">
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/usuarios" className="hover:text-gray-300 active:text-blue-500">Usuario</NavLink>
        </li>
        <li>
          <NavLink to="/lista-productos" className="hover:text-gray-300 active:text-blue-500">Lista Productos</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;