import React from "react";
import {TodoProvider} from '../TodoContext/index'
import { AppUI } from './AppUI';




function App(props) {
  
  return (
    //Since inside the TodoProvider 
    //function thereis the tag
    //props.children
    //anything we wrap between the 
    //TodoProvider tag is gonna be passed
    <TodoProvider>
    {/* any descendant of AppUi can 
    call the fuctions or attributes of the provider */}
        <AppUI/>
    </TodoProvider>
  );
}

export default App;
