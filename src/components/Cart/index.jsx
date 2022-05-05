import "./Cart.css";
import CartTotal from "../CartTotal";

const Cart = ({ currentSale, handleDelete0ne }) => {
  return (
    <div className="carrinho">
      <div className="head">
        <span>Carrinho de compras</span>
      </div>
      <ul className="bodyCart">
        {currentSale.length === 0 ? (
          <div className="emptyCart">
            <span className="emptyBag">Sua sacola está vazia</span>
            <span className="addItems">Adicione itens</span>
          </div>
        ) : (
          <>
            {currentSale.map((product) => {
              return (
                <CartTotal
                  currentSale={currentSale}
                  product={product}
                  key={product.id}
                  handleDelete0ne={handleDelete0ne}
                />
              );
            })}
          </>
        )}
      </ul>
    </div>
  );
};

export default Cart;
