import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  //create a state to keep track of the value of the drop down menu
  const [filterBy, setFilterBy] = useState('All')
  //change the value of the state when this fucntion is called (it is called when the drop down is changed)
  function handleFilterChange (e) {
    setFilterBy(e.target.value)
  }
  //creates a new array with the items that we want to display using the original array "items" as a base
  const itemsToDisplay = items.filter(items =>{
    //if the drop down is set to ALL we just return the full orginal array with all the items 
    if (filterBy === "All"){
      return true;
    }
    //if it is set to anyother value we compare that value to the catagory of the items and if they mathch
    //we add them to a new array and then return that new array
    else{
      return items.category ===filterBy;
    }
  })


  return (
    <div className="ShoppingList">
      <div className="Filter">
        {/* change the value of the state when the dropdown is changed */}
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* using the new array that we made using the info from the dropdown change, we display each item from that display */}
        {itemsToDisplay.map((item) => (
          //pass Item each of the indiviual items we want it to render on the list
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
