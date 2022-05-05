import "./CartTotal.css";
import ButtonComp from "../Button";

const CartTotal = ({ product, handleDelete0ne }) => {
  return (
    <li className="fullCart">
      <div className="cartProducts">
        <div className="imgCart">
          <img src={product.img} alt="Produto" />
        </div>
        <div className="description">
          <span className="nameCart">{product.name}</span>
          <span className="categoryCart">{product.category}</span>
        </div>
        <ButtonComp
          className="removeProduct"
          onClick={() => handleDelete0ne(product)}
        >
          Remover
        </ButtonComp>
      </div>
    </li>
  );
};

export default CartTotal;
