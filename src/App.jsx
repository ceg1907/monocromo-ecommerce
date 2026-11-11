import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting='Bienvenida a monocromo: el gris también es un color' />
    </>
  );
}

export default App;
