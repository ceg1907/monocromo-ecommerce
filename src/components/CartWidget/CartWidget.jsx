import './CartWidget.css';
import { HiOutlineShoppingBag } from 'react-icons/hi2';

function CartWidget() {
    return (
        <div className='box-carrito'>
            <HiOutlineShoppingBag />
            <span className='contador-carrito'>1</span>
        </div>
    );
}

export default CartWidget;
