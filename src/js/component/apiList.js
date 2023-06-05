import React, { useEffect, useState } from "react";


const ApiList = () => {

   const [listOfTask, setListOfTask] = useState([])
   const [task, setTask] = useState ("")
   const [countTask, setCountTask] = useState (0)
   const apiUrl = 'https://assets.breatheco.de/apis/fake/todos/user/juand'

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
    const getAll = () =>{
        fetch(apiUrl)
        .then((response) => {
            console.log(response.ok);
            console.log(response.status); 
            return response.json()
        }).then((response) => {
            console.log(response)
            setListOfTask(response)
        })
        .catch(error => {
            console.log(error);
        })
    }
    useEffect (() => {
        getAll();
    }, [])

    useEffect (() => {
        putNote()
    }, [listOfTask])

        const putNote = () => {

            fetch(apiUrl, {
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
                        <input 
                        type="text" 
                        name="label"
                        className="form-control" 
                        placeholder= "Añadir Tarea" 
                        onChange={(event) => setTask(event.target.value)}
                        onKeyDown = {(event) => event.key == "Enter" ? counter() : ""}
                        />
                    </form>
                </li>
                {
                    listOfTask.map((task, index) => {
                        return (
                            <div className="contenedor-botones">
                            <li className="list-group-item" key={index}>{task.label}
                            <button className="btn boton-oculto" 
                            onClick={() => deleteTask(index)}>
                            <i className="fas fa-trash-alt"></i>
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

export default ApiList