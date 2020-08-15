import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";



class App extends Component {

  state = {
        items: [{id:1,title:'Wake up'},
                {id:2,title:'Make Breakfast'}
        ],
        id:uuidv4(),
        item:'',
        editItem:false
  };

  handleChange = (e) => {console.log("handle change");};
  handleSubmit = (e) => {console.log("handle Submit");};
  clearList = (e) => {console.log("clearList method");};
  handleDelete = (id) => {console.log(` handle delete ${id}`);};
  handleEdit = (id) => {console.log(` handle Edit ${id}`);};


  render(){
    console.log(this.state);
  return(
    
      <div className="container">
        <div className="row">
          <div className=" col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
        <TodoInput/>
        <TodoList/> 
        </div> 
        </div>

      </div>

    
  );
}
}

export default App;
