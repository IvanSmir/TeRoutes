import { useState } from "react";
import { ProductContext, UserContext } from "./Context";
import PropTypes from 'prop-types';


export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);  
    return (
      <UserContext.Provider value={{ users, setUsers }}>
        {children}
      </UserContext.Provider>
    );
  };
  
export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [currentProduct, setCurrentProduct] = useState(null);

    return (
      <ProductContext.Provider value={{ products, setProducts, currentProduct, setCurrentProduct }}>
        {children}
      </ProductContext.Provider >
    );
  };

  UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  ProductsProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  