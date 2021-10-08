import "./style.css";

export const Products = ({
  id,
  name,
  price,
  discount,
  valueDiscount,
  totalToPay,
  handleClick,
  handleRemove,
  buttonAppear,
  buttonAppear2,
}) => {
  return (
    <div className="ProductCards">
      <div>
        <div className="div-text">
          <label className="id">{id}</label>
          <label className="name">{name}</label>
          <label className="price">De: R$ {price}</label>
          <label className="total-to-pay">Por: {totalToPay}</label>
          <label className="discount">{discount}% de desconto.</label>
          <label className="value-discount">Você esconomiza {valueDiscount}!</label>
        </div>

        {buttonAppear && 
          <button onClick={() => handleClick(id)}>Adicionar ao carrinho</button>}
        {buttonAppear2 && 

        <button onClick={() => handleRemove(id)}>Remover do carrinho</button>}
      </div>
    </div>
  );
};
