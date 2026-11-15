import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { getProducts } from '../../mock/asyncMock';
import ItemList from '../ItemList/ItemList';

function ItemListContainer({ greeting }) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                setError(null);
                const products = await getProducts();
                setItems(products);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    return (
        <main className='box-main'>
            <h1>{greeting}</h1>
            <ItemList items={items} />
        </main>
    );
}

export default ItemListContainer;
