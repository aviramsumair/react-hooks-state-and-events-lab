import React, { useState } from "react";

function Item({ name, category }) {
  //sets the state vale for if the item is in the cart
  const [isInCart, setIsInCart] = useState(false)
  //swaps the value of if the item is in the cart when we call it
  function addToCart(){
    setIsInCart (!isInCart)
  }  

  return (
    //changes the class name so CSS can update the look of the item
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/*updates the button class name for CSS when we click the button and then all call
      the function to swap the value of if the item is in the dark*/}
      <button className={isInCart ? "remove" : "add"} onClick={addToCart}>
        {isInCart ? "Remove from" : "Add to "} Cart        
      </button>
    </li>
  );
}

export default Item;
