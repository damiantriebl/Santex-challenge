import { Header } from './components/Header';
import { ProductList } from './components/ProductList';

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
