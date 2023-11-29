import { useNavigate } from "react-router-dom";
import ProductsList from "../components/ProductsList";

const ProductsHome = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-full">
      <h1 className="text-5xl font-bold mb-4">Productos</h1>
      <button
        onClick={()=>{navigate("/create-products")}}
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Agregar Producto
      </button>
      <ProductsList />
    </div>
  )
}

export default ProductsHome