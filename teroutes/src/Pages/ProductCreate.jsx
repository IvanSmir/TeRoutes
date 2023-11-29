import ProductsForm from "../components/ProductsForm";

const ProductCreate = () =>{
    return(
        <div className="flex flex-col items-center justify-center min-h-full">
      <h1 className="text-5xl font-bold mb-4">Producto</h1>
      
      <ProductsForm/>
    </div>
    )
}

export default ProductCreate;