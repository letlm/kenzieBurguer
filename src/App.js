import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
import CartValue from "./components/CartValue";
import ProductsList from "./components/ProductsList";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  function handleClick(product) {
    if (product !== undefined && currentSale.includes(product)) {
      toast.error("Ops, acabou o estoque. Selecione outro por favor!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setCurrentSale([...currentSale, product]);
    }
  }

  function handleDelete0ne(product) {
    const removeOne = currentSale.filter((prod) => {
      return prod.id !== product.id;
    });
    setCurrentSale([...removeOne]);
  }

  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header setSearch={setSearch} />
      <div className="page">
        <ProductsList
          products={products}
          currentSale={currentSale}
          handleClick={handleClick}
          search={search}
        />
        <div className="cartApp">
          <Cart currentSale={currentSale} handleDelete0ne={handleDelete0ne} />
          {currentSale.length >= 1 ? (
            <CartValue
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
