import './ItemList.css';

import ProductCard from '../ProductCard/ProductCard';

const ItemList = ({ items }) => {
    return (
        <div className='box-products'>
            {items.map((item) => (
                <ProductCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;
