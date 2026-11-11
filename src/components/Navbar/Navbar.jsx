import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
  return (
    <header>
      <a href='#'>monocromo®</a>
      <nav>
        <ul>
          <li>
            <a href='#'>abrigos</a>
          </li>
          <li>
            <a href='#'>tejidos</a>
          </li>
          <li>
            <a href='#'>camisas</a>
          </li>
          <li>
            <a href='#'>pantalones</a>
          </li>
          <li>
            <a href='#'>accesorios</a>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
}

export default NavBar;
