import { useState } from "react";
import { ProductContext, UserContext } from "./Context";

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
    return (
      <ProductContext.Provider value={{ products, setProducts }}>
        {children}
      </ProductContext.Provider >
    );
  };
