import React from "react";
import { useState } from "react";

export function Form(props){
    const {tarea, handleSubmit, handleChange, contador} = props

    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Introduce nueva tarea" 
                onChange={handleChange}
                value={tarea}
                contador= {(event) => event.key == "Enter" ? contador() : ""}/>
             
        </form>
    )

}

export default Form;

