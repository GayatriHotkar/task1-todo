import React, { useState } from 'react';
import Todolist from './Todolist';

const App = () => {

  const [inputList,setInputList]=useState("");

  const [items,setItems] = useState([]);

  const itemEvent = (event) => {
   setInputList(event.target.value)
  };
  
   const listOfItems = () => { 
     setItems((oldItems) => {
       return [...oldItems, inputList];
     });
     setInputList (" ");
  };

  const deleteItems = (id) => {

    setItems((oldItems) => {
      return oldItems.filter((arrElem,index) => {
        return index !== id;
      });
    });
  };

  return(
    <>
      <div className = "main_div">
      <div className = "center_div">
        <br/>
        <h1>Todo list</h1>
        <br/>
        <input 
        type = "text"
         placeholder ="Add items" 
         value = {inputList}
         onChange = {itemEvent}

         />

        <button onClick = {listOfItems} > Add </button>

        <ol>
           {items.map( (itemval,index) => {
           return ( 
             <Todolist 
              key={index}
              id={index}
                text = {itemval}
                onSelect = {deleteItems}
            />
           );
          })}
        </ol>
      </div>
      </div>
    </>
  )
}

export default App;
