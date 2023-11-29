import { useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { reject } from "lodash";
import { ProductContext } from "./Context";
import { toast } from "sonner";

const ProductsList = () => {
    const { products, setProducts, setCurrentProduct } = useContext(ProductContext);
    const navigate = useNavigate();

    useEffect(() => {
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }
    }, [setProducts]);

    const onDelete = useCallback((id) => {
        const updatedProducts = reject(products, { id: id });
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));

        toast.success("Producto eliminado");
    }, [products, setProducts]);

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full leading-normal">
                <thead>
                    <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Imagen
                        </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            #
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Descripcion
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Precio
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                             <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded-full" src={product.image} alt="Imagen del Producto" />
                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {product.id}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {product.name}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {product.price}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex justify-start space-x-4">
                                    <button
                                        className="text-blue-500 hover:text-white border border-blue-500 hover:border-blue-700 hover:bg-blue-700 rounded py-2 px-4"
                                        onClick={() => {setCurrentProduct(product),
                                            navigate(`/productos/${product.id}`)
                                        }}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="text-red-500 hover:text-white border border-red-500 hover:border-red-700 hover:bg-red-700 rounded py-2 px-4"
                                        onClick={() => onDelete(product.id)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductsList;
