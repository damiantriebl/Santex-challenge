import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductList/ProductList';

function App() {
  return (
    <>
      <Header></Header>
      <div>
        <h1>Product List</h1>
        <ProductList></ProductList>
      </div>
    </>
  );
}

export default App;
