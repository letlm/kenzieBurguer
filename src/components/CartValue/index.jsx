import "./CartValue.css";
import ButtonComp from "../Button";

const CartValue = ({ currentSale, setCurrentSale }) => {
  function cartPrice() {
    const total = [];
    for (const keys in currentSale) {
      total.push(currentSale[keys].price);
    }
    const valueTotal = total.reduce((acc, value) => {
      acc += value;

      return acc;
    }, 0);
    return valueTotal;
  }

  return (
    <div className="valueTotal">
      <div className="border"></div>
      <div className="values">
        <span className="totalCart">Total</span>
        <span className="priceCart">
          {cartPrice().toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <ButtonComp
        className={"btnRemoveAll"}
        onClick={() => {
          setCurrentSale([]);
        }}
      >
        Remover todos
      </ButtonComp>
    </div>
  );
};

export default CartValue;
