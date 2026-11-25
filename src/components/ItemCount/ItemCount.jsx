import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(1);

    function sumar() {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function restar() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <div className='item-count'>
            <button
                type='button'
                className='count-btn'
                onClick={restar}
                disabled={count <= 1}
                aria-label='Restar una unidad'>
                −
            </button>
            <span className='count-number'>{count}</span>
            <button
                type='button'
                className='count-btn'
                onClick={sumar}
                disabled={count >= stock}
                aria-label='Sumar una unidad'>
                +
            </button>
        </div>
    );
};

export default ItemCount;
