import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { InputGroup, Form } from "react-bootstrap";

function ToDo() {
  
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (

  
    
    <div className="todo-section">
      <div className="container mt-3">
        <div className="row align-items-center mt-2">
          <div className="col-md-6 search-bar  d-flex align-items-center justify-content-center">
            <div className="todo-list">
              <InputGroup>
                <InputGroup.Text> Add your items</InputGroup.Text>
                <input type="text"  className="searchInput"  onChange={(e)=>{
                  setInputValue(e.target.value);
                }} />
              </InputGroup>
            </div>
          </div>

          <div className="col-md-6  buttons d-flex align-items-center justify-content-center">
            <div className="button-group">
              <Button variant="primary"  type="submit" onClick={handleAddTodo}>Add</Button>
            
             
            </div>
          </div>
        </div>
      </div>


    <div className="list-section">
      
        <div className="row">
          <div className="col-md-12 ">
          
            <ul></ul>
            {todos.map((todo, index)=>(
              <>
               <li key={index}>{todo}</li>
               <div className="delete-button">
               <Button variant="primary ms-2" onClick={()=>{
                handleDeleteTodo(index);
              }}>Delete</Button>
               </div>
               </>
          
               
               )
            )}
           
          </div>
          
        </div>
      </div>
  
    </div>
  );
};

export default ToDo;
