import { createContext} from "react";

export const UserContext = createContext({
  users: [],
  setUsers: () => {},
});

export const ProductContext = createContext({
  products: [],
  setProducts: () =>{},
  currentProduct: {},
  setCurrentProduct: ()=>{}
})