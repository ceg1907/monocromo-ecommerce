import { useEffect, useState } from 'react';
import { getProductById } from '../../mock/asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';

const productId = '1';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                setError(null);
                const productoEncontrado = await getProductById(productId);
                setProduct(productoEncontrado);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    if (loading) {
        return (
            <main className='box-main'>
                <p>cargando productos...</p>
            </main>
        );
    }
    if (error) {
        return (
            <main className='box-main'>
                <p>Ha ocurrido un error, intenta mas tarde</p>
            </main>
        );
    }

    return (
        <main className='box-main'>
            <ItemDetail product={product} />
        </main>
    );
};

export default ItemDetailContainer;
