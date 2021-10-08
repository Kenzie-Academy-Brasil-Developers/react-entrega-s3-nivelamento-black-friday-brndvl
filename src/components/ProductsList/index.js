import { Products } from "../Products";
import "./style.css";

export const ProductsList = ({
  product,
  handleClick,
  handleRemove,
  currentSale,
  randomProductList,
  totalToPay,
  discount,
  valueDiscount,
  total,
}) => {
  return (
    <div>
      <ul>
        {randomProductList.map((item, index) => (
          <li key={index}>
            <Products
              id={item.id}
              name={item.name}
              price={item.price}
              totalToPay={(item.totalToPay).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
              discount={(item.discount).toFixed(2)}
              valueDiscount={(item.valueDiscount).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
              handleClick={handleClick}
              buttonAppear={true}
              buttonAppear2={false}
            />
          </li>
        ))}
      </ul>

      <p>Sub-total: R$ {total.toFixed(2)}</p>

      <ul className="car">
        {currentSale.map((item, index) => (
          <li key={index}>
            <Products
              id={item.id}
              name={item.name}
              price={item.price}
              totalToPay={(item.totalToPay).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
              discount={(item.discount).toFixed(2)}
              valueDiscount={(item.valueDiscount).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
              handleRemove={handleRemove}
              buttonAppear={false}
              buttonAppear2={true}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
