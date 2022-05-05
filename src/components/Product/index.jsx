import "./Product.css";
import ButtonComp from "../Button";

const Product = ({ product, handleClick }) => {
  return (
    <li key={product.id} className="productsId">
      <div className="imgBack">
        <img src={product.img} alt="Produto" />
      </div>

      <div className="spanProducts">
        <span className="name">{product.name}</span>
        <span className="category">{product.category}</span>
        <span className="price">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <ButtonComp className="addProduct" onClick={() => handleClick(product)}>
          Adicionar
        </ButtonComp>
      </div>
    </li>
  );
};

export default Product;
