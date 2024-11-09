import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
 const ItemCount = ({stock}) => {

  const [count, setCount]=useState(1);

  function handleCount(type) {
    if (type === "plus" && count < stock) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
  }

    return (
      <>
       <Card.Body className="button-card">
       <div className="item-container">
        <button onClick={()=> handleCount("minus")} >-</button>
        <span id="counter">{count}</span>
        <button onClick={()=> handleCount("plus")} >+</button>
        </div>
      <Button variant="dark">Comprar</Button>
       </Card.Body>
    
      </>
    );
  };

  export default ItemCount