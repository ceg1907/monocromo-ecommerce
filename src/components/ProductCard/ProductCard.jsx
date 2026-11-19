import './ProductCard.css';

const ProductCard = ({ item }) => {
    return (
        <article className='product-card'>
            <img src={item.img} alt={item.name} className='img-card' />
            <div className='box-description-item'>
                <p className='text-category'>{item.category}</p>

                <h3 className='card-tittle'>{item.name}</h3>
                <span className='card-price'>
                    ${item.price.toLocaleString('es-AR')}
                </span>
            </div>
        </article>
    );
};

export default ProductCard;
