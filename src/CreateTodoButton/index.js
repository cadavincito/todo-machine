import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){

    const onClickButton = () => {
        // if(props.openModal === false){
        //     props.setOpenModal(true);
        // }else{
        //     props.setOpenModal(false);
        // }

        //prevstate is a react thing that allows me to switch states
        props.setOpenModal(prevState => !prevState);
    };

    return(
        <button className="CreateTodoButton"
            onClick={onClickButton}
        >+</button>
    );
}

export {CreateTodoButton};