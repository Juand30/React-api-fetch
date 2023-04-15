import React, { useState } from "react";

export function Tarea(props){

    const [boton, setBoton] = useState()
    const {tarea, onBorrarTarea} = props

        return (
            <>
                <div id={tarea.id} onMouseOver={()=>setBoton(true)} onMouseLeave={()=>setBoton(false)}>  
                    <span>{tarea.tarea}</span>
                    <button id="boton" className="btn boton-oculto" 
                    onClick={()=> onBorrarTarea(tarea.id)}>
                       <i class={`fas fa-trash-alt ${boton ? "" : "d-none" }`}></i>
                    </button>
                    
                </div>
            
            </>
        );

}

export default Tarea;