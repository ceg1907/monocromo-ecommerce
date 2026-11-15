const ProductCard = ({ item }) => {
    return (
        <article>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span>{item.price}</span>
        </article>
    );
};

export default ProductCard;
