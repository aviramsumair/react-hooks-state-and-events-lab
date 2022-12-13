import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  //make the state variable
  const [isDarkMode, setIsDarkmode] = useState(false)    
  //flips the value of "isDarkMode" to its oppsite value
  function modeChange(){
    setIsDarkmode(!isDarkMode);
  }  
  //and if statement tesing the value of appClass so CSS can read it
  const appClass = isDarkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={modeChange}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>        
      </header>
      {/* pass ShoppingLists the array if items */}
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
