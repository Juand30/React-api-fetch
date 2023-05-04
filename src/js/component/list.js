import propTypes from "prop-types";
import React, { useEffect, useState } from "react";


const List = () => {

   const [listOfTask, setListOfTask] = useState([])
   const [task, setTask] = useState ("")
   const [countTask, setCountTask] = useState (0)
  

   const counter = () => {
    if (task != ""){
        setListOfTask([...listOfTask, {label: task, done: false}])
        setCountTask (countTask + 1)
        }
    }
   const deleteTask = (index) => {
    setCountTask (countTask -1) 
    const newList = listOfTask.filter((oneTask, i) => i != index)
    setListOfTask (newList)
   }
   
    useEffect (() => {

        fetch('https://assets.breatheco.de/apis/fake/todos/user/juand')
        .then((response) => {
            console.log(response.ok); // Será true (verdad) si la respuesta es exitosa.
            console.log(response.status); // el código de estado = 200 o código = 400 etc.
            //console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
            return response.json()
        }).then((response) => {
            console.log(response)
            setListOfTask(response)
        })
        .catch(error => {
            console.log(error);
        })
    }, [])


    useEffect (() => {
        console.log (listOfTask)
        fetchAdd()
    }, [listOfTask])
  
        const fetchAdd = () => {

            fetch('https://assets.breatheco.de/apis/fake/todos/user/juand', {
                method: "PUT",
                body: JSON.stringify(listOfTask),
                headers: {
                  "Content-Type": "application/json"
                }
              })
            .then((response) => response.json())
            .then((response) => {
                console.log(response)
            })
        }
        return (
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                    <form onSubmit={(e) => {e.preventDefault(),e.target.reset()}}>
                        <div className="mt-3 form-floating">
                        <input 
                        id="input1"
                        type="text" 
                        name="label"
                        className="form-control" 
                        placeholder= "Añadir Tarea" 
                        onChange={(event) => setTask(event.target.value)}
                        onKeyDown = {(event) => event.key == "Enter" ? counter() : ""}
                        />
                        <label for="input1">Añadir Tarea</label>
                        </div>
                    </form>
                </li>
                {
                    listOfTask.map((task, index) => {
                        return (
                            
                            <div className="contenedor-botones">
                            <li className="list-group-item" key={index}>{task.label}
                            
                            <button className="btn boton-oculto" 
                                onClick={() => deleteTask(index)}>
                                <i class="fas fa-trash-alt"></i>
                               </button> 
                              
                            </li>
                            </div>
                           
                        )
                        
                    })
                }

            </ul>
            
        </div>
    )
}

export default List

{/* <i class={`fas fa-trash-alt`}></i> */}