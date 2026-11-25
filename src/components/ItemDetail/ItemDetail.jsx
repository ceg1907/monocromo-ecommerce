import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
    return (
        <article className='detail-product row g-5 align-items-start'>
            <div className='col-md-6'>
                <img
                    src={product.img}
                    alt={product.name}
                    className='detail-img'
                />
            </div>

            <div className='detail-info col-md-6'>
                <span className='detail-category'>{product.category}</span>
                <h2 className='detail-title'>{product.name}</h2>
                <p className='detail-price'>
                    $ {product.price.toLocaleString('es-AR')}
                </p>
                <p className='detail-description'>{product.description}</p>
                <ItemCount stock={product.stock} />
                <p className='detail-stock'>
                    Stock disponible: {product.stock} unidades
                </p>
            </div>
        </article>
    );
};

export default ItemDetail;
