import { NavLink, useMatch } from 'react-router-dom';

const NavBar = () => {
  const matchUsuarios = useMatch("/usuarios");
  const matchListaProductos = useMatch("/productos");

  return (
    <nav className=" fixed top-0 left-0 w-full  bg-white text-blue-400 p-3 text-xl border-b-2 ">
      <ul className="flex justify-end space-x-4 ">
        <li>
          <NavLink
            to="/usuarios"
            className={`hover:text-gray-300  ${matchUsuarios ? "text-blue-900 underline" : ""}`}
          >
            <strong>Lista Usuarios</strong>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/productos"
            className={`hover:text-gray-300 ${matchListaProductos ? "text-blue-900 underline" : ""}`}
          >
            <strong>Lista Productos</strong>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
