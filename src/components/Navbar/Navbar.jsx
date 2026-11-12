import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
  return (
    <header className='box-header'>
      <a href='#' className='logo-header'>
        monocromo<span>®</span>
      </a>
      <nav>
        <ul>
          <li>
            <a href='#' className='indice-header'>
              abrigos
            </a>
          </li>
          <li>
            <a href='#' className='indice-header'>
              tejidos
            </a>
          </li>
          <li>
            <a href='#' className='indice-header'>
              camisas
            </a>
          </li>
          <li>
            <a href='#' className='indice-header'>
              pantalones
            </a>
          </li>
          <li>
            <a href='#' className='indice-header'>
              accesorios
            </a>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
}

export default Navbar;
