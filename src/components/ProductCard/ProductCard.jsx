import './ProductCard.css';

const ProductCard = ({ item }) => {
    return (
        <article className='product-card'>
            <img src={item.img} alt={item.name} className='img-card' />
            <div className='box-description-item'>
                <h3 className='card-tittle'>{item.name}</h3>
                <p>{item.description}</p>
                <span className='card-price'>
                    ${item.price.toLocaleString('es-AR')}
                </span>
            </div>
        </article>
    );
};

export default ProductCard;
