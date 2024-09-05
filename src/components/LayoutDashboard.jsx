import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../components/firebaseConfig';

function LayoutDashboard() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '', quantity: '', stock: '' });
    const [editProduct, setEditProduct] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    const fetchProducts = async () => {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsData);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleAddProduct = async () => {
        await addDoc(collection(db, 'products'), newProduct);
        setNewProduct({ name: '', price: '', description: '', quantity: '', stock: '' });
        setIsAddModalOpen(false);
        fetchProducts();
    };

    const handleEditProduct = async () => {
        const productDoc = doc(db, 'products', editProduct.id);
        await updateDoc(productDoc, editProduct);
        setEditProduct(null);
        setIsEditModalOpen(false);
        fetchProducts();
    };

    const handleDeleteProduct = async () => {
        const productDoc = doc(db, 'products', productToDelete.id);
        await deleteDoc(productDoc);
        setProductToDelete(null);
        setIsDeleteModalOpen(false);
        fetchProducts();
    };

    return (
        <main className="flex-grow p-4 ml-40 flex justify-center pt-20">
            <div className="overflow-x-auto w-3/4">
                <table className="w-full max-w-7xl text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-4">Nombre</th>
                            <th scope="col" className="px-4 py-3">Precio</th>
                            <th scope="col" className="px-4 py-3">Descripcion</th>
                            <th scope="col" className="px-4 py-3">Cantidad</th>
                            <th scope="col" className="px-4 py-3">Stock</th>
                            <th scope="col" className="px-4 py-3">
                                <button
                                    onClick={() => setIsAddModalOpen(true)}
                                    className="inline-flex items-center text-sm font-medium bg-green-500 hover:bg-green-600 dark:hover:bg-gray-700 p-1.5 dark:hover-bg-gray-800 text-center text-white hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                >
                                    Agregar Producto
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id} className="border-b dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-4 py-3 font-medium text-gray-900  dark:text-white"
                                >
                                    {product.name}
                                </th>
                                <td className="px-4 py-3">{product.price}</td>
                                <td className="px-4 py-3">{product.description}</td>
                                <td className="px-4 py-3">{product.quantity}</td>
                                <td className="px-4 py-3">{product.stock}</td>
                                <td className="px-4 py-3 flex items-center justify-end space-x-3">
                                    <button
                                        onClick={() => { setEditProduct(product); setIsEditModalOpen(true); }}
                                        className="inline-flex items-center text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 p-1.5 dark:hover-bg-gray-800 text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                        type="button"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => { setProductToDelete(product); setIsDeleteModalOpen(true); }}
                                        className="inline-flex items-center text-sm font-medium bg-red-500 hover:bg-red-600 dark:hover:bg-gray-700 p-1.5 dark:hover-bg-gray-800 text-center text-white hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                        type="button"
                                    >
                                        Borrar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {isAddModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-5 rounded-lg w-1/2">
                            <h2 className="text-xl font-medium mb-4">Agregar Producto</h2>
                            <form onSubmit={(e) => { e.preventDefault(); handleAddProduct(); }}>
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    value={newProduct.name}
                                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                    className="block w-full p-3 mb-4 border border-gray-300 rounded"
                                />
                                <input
                                    type="text"
                                    placeholder="Precio"
                                    value={newProduct.price}
                                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                                    className="block w-full p-3 mb-4 border border-gray-300 rounded"
                                />
                                <textarea
                                    placeholder="Descripcion"
                                    value={newProduct.description}
                                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                                    className="block w-full p-3 mb-4 border border-gray-300 rounded h-32"
                                />
                                <input
                                    type="text"
                                    placeholder="Cantidad"
                                    value={newProduct.quantity}
                                    onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
                                    className="block w-full p-3 mb-4 border border-gray-300 rounded"
                                />
                                <input
                                    type="text"
                                    placeholder="Stock"
                                    value={newProduct.stock}
                                    onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                                    className="block w-full p-3 mb-4 border border-gray-300 rounded"
                                />
                                <div className="flex justify-end space-x-4">
                                    <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded">Agregar</button>
                                    <button onClick={() => setIsAddModalOpen(false)} className="px-6 py-3 bg-gray-500 text-white rounded">Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                {isEditModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-5 rounded-lg w-1/2">
                            <h2 className="text-xl font-medium mb-4">Editar Producto</h2>
                            <form onSubmit={(e) => { e.preventDefault(); handleEditProduct(); }}>
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    value={editProduct.name}
                                    onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
                                    className="block w-full p-3 mb-4 border border-gray-300 rounded"
                                />
                                <input
                                    type="text"
                                    placeholder="Precio"
                                    value={editProduct.price}
                                    onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
                                    className="block w-full p-3 mb-4 border border-gray-300 rounded"
                                />
                                <textarea
                                    placeholder="Descripcion"
                                    value={editProduct.description}
                                    onChange={(e) => setEditProduct({ ...editProduct, description: e.target.value })}
                                    className="block w-full p-3 mb-4 border border-gray-300 rounded h-32"
                                />
                                <input
                                    type="text"
                                    placeholder="Cantidad"
                                    value={editProduct.quantity}
                                    onChange={(e) => setEditProduct({ ...editProduct, quantity: e.target.value })}
                                    className="block w-full p-3 mb-4 border border-gray-300 rounded"
                                />
                                <input
                                    type="text"
                                    placeholder="Stock"
                                    value={editProduct.stock}
                                    onChange={(e) => setEditProduct({ ...editProduct, stock: e.target.value })}
                                    className="block w-full p-3 mb-4 border border-gray-300 rounded"
                                />
                                <div className="flex justify-end space-x-4">
                                    <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded">Guardar</button>
                                    <button onClick={() => setIsEditModalOpen(false)} className="px-6 py-3 bg-gray-500 text-white rounded">Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                {isDeleteModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-5 rounded-lg w-1/3">
                            <h2 className="text-xl font-medium mb-4">Confirmar Eliminación</h2>
                            <p>¿Estás seguro de que deseas eliminar este producto?</p>
                            <div className="mt-4 flex justify-end space-x-4">
                                <button onClick={handleDeleteProduct} className="px-6 py-3 bg-red-500 text-white rounded">Eliminar</button>
                                <button onClick={() => setIsDeleteModalOpen(false)} className="px-6 py-3 bg-gray-500 text-white rounded">Cancelar</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

export default LayoutDashboard;