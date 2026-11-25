import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ product }) => {
    return (
        <article className='detail-product'>
            <img src={product.img} alt={product.name} className='detail-img' />
            <div className='detail-info'>
                <h2>{product.name}</h2>
                <h3 className='detail-price'>
                    ${product.price.toLocaleString('es-AR')}
                </h3>
                <ItemCount stock={product.stock} />
                <p>{product.category}</p>
                <p>{product.description}</p>
                <p>Stock disponible: {product.stock} unidades</p>
            </div>
        </article>
    );
};

export default ItemDetail;
