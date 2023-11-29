import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "./Context";
import { toast } from "sonner";

const ProductsForm = () => {
    const { products, setProducts, currentProduct, setCurrentProduct } = useContext(ProductContext);
    const [product, setProduct] = useState({ id: "", name: "", description: "", image: "" });
    const navigate = useNavigate();

    useEffect(() => {
        if (currentProduct) {
            setProduct(currentProduct);
        }
    }, [currentProduct]);

    const handleNameChange = useCallback(
        (event) => {
            setProduct({ ...product, name: event.target.value });
        },
        [product, setProduct]
    );

    const handlePriceChange = useCallback(
        (event) => {
            setProduct({ ...product, price: event.target.value });
        },
        [product, setProduct]
    );
    const handleImgChange = useCallback(
        (event) => {
            setProduct({ ...product, image: event.target.value });
        },
        [product, setProduct]
    );


    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const updatedProducts = currentProduct
            ? products.map(p => p.id === product.id ? { ...product } : p)
            : [...products, { ...product, id: products.length > 0 ? products[products.length - 1].id + 1 : 1 }];

        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        toast.success(currentProduct ? "Producto actualizado" : "Producto agregado");
        setCurrentProduct(null);
        navigate("/productos");
    }, [product, products, setProducts, setCurrentProduct, navigate, currentProduct]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">
                    Nombre:
                </label>
                <input
                    type="text"
                    id="nombre"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={product.name}
                    onChange={handleNameChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
                    Precio:
                </label>
                <input
                    type="text"
                    id="precio"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={product.price}
                    onChange={handlePriceChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="imagen" className="block text-gray-700 text-sm font-bold mb-2">
                    Url de la imagen:
                </label>
                <input
                    type="text"
                    id="imagen"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={product.image}
                    onChange={handleImgChange}
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Guardar
            </button>
        </form>
    )
}

export default ProductsForm;
