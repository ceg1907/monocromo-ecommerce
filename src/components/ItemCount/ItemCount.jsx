import { useState } from 'react';

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
        <div>
            <button onClick={restar}>-</button>
            <span>{count}</span>
            <button onClick={sumar}>+</button>
        </div>
    );
};

export default ItemCount;
