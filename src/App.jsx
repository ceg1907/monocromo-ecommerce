import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <ItemListContainer greeting='Bienvenida a monocromo: el gris también es un color' />
            <ItemDetailContainer />
        </>
    );
}

export default App;
