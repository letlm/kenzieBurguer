import "./ProducstList.css";
import Product from "../Product";

const ProductsList = ({ products, handleClick, search, currentSale }) => {
  function showResults() {
    const filters = products.filter((item) => {
      return (
        item.name.toUpperCase().includes(search.toUpperCase()) ||
        item.category.toUpperCase().includes(search.toUpperCase())
      );
    });
    return filters;
  }

  return (
    <div className="products">
      <div className="desktop">
        <div className="produtos">
          {search.length > 0 ? (
            <h1 className="results">
              Resultado para: <span>{search}</span>
            </h1>
          ) : (
            <h1> </h1>
          )}
          <ul className="listProducts">
            {products &&
              showResults().map((product) => {
                return (
                  <Product
                    key={product.id}
                    product={product}
                    handleClick={handleClick}
                    currentSale={currentSale}
                  />
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
