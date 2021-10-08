import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { ProductsList } from "./components/ProductsList";

function App() {
  const [product, setProduct] = useState([
    { id: 1, name: "Smart TV LED 50", price: 1999.0 },
    { id: 2, name: "PlayStation 5", price: 12000.0 },
    { id: 3, name: "Notebook Acer Nitro 5", price: 5109.72 },
    { id: 4, name: "Headset s fio Logitech G935", price: 1359.0 },
    { id: 5, name: "Tablet Samsung Galaxy Tab S7", price: 4844.05 },
    { id: 6, name: "Cadeira Gamer Cruiser Preta FORTREK", price: 1215.16 },
  ]);

  const [currentSale, setCurrentSale] = useState([]);

  const [randomProductList, setRandomProductList] = useState([]);

  const [discountValue, setDiscontValue] = useState(
    Math.random() * (0.91 - 0.4) + 0.4
  );

  const handleClick = (productCode) => {
    const newArr = randomProductList.filter((item) => item.id === productCode);
    setCurrentSale([...currentSale, newArr[0]]);
  };

  const handleRemove = (removedItem) => {
    setCurrentSale(currentSale.filter((item) => item.id !== removedItem));
  };

  const total = currentSale.reduce(
    (acc, p) => p.price - p.valueDiscount + acc,
    0
  );

  const randomChoice = () => {
    setDiscontValue(Math.random() * (0.9 - 0.4) + 0.4);
    const discount = 1 - discountValue;

    const random = Math.floor(Math.random() * product.length);
    const newObj = product[random];
    
    randomProductList.map((item) => {
      
      console.log(item)
      if(item.id !== random) {
        const newPrice = {
          ...newObj,
          totalToPay: newObj.price * discount,
          discount: discountValue * 100,
          valueDiscount: newObj.price - newObj.price * discount,
        };
        setRandomProductList([...randomProductList, newPrice]);
      } else {
        randomChoice()
      }
    })

  };

  return (
    <div className="App">
      <div className="App-header">
        <button onClick={randomChoice}>Gerar Promoção</button>
        <ProductsList
          product={product}
          handleClick={handleClick}
          handleRemove={handleRemove}
          currentSale={currentSale}
          randomProductList={randomProductList}
          total={total}
        />
      </div>
    </div>
  );
}

export default App;
