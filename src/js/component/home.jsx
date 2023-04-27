import React, { useEffect, useState } from "react";
import Form from "./Form";

const Home = () => {
  // const [tarea, setTarea] = useState("");
  // const [listadoTareas, setListadoTareas] = useState([]);
  const [contadorTareas, setContadorTareas] = useState(0);
  const [data, setData] = useState([]);
 

  // const contador = () => {
  //   if (tarea != "") {
  //     setListadoTareas([...listadoTareas, { label: tarea, done: false }]);
  //     setContadorTareas(contadorTareas + 1);
  //   }
  // };

  function handleSubmit(e) {
    e.preventDefault();

    if (tarea === "") {
      alert("Debes Agregar una Tarea");
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      tarea: tarea,
      completado: false,
    };
    const temp = [nuevaTarea, ...listadoTareas];
    contador();
    setListadoTareas(temp);
    setTarea("");
    console.log(listadoTareas);
  }

  useEffect(() => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/juand")
      .then((response) =>{
      return response.json()})
      .then((response) =>{
        console.log("Respuesta:", response)
        setData(response)
      })
      
  }, []);

  function handleChange(e) {
    setTarea(e.target.value);
    console.log("tarea");
  }

  function onBorrarTarea(id) {
    setContadorTareas(contadorTareas - 1);
    const temp = listadoTareas.filter((item) => item.id !== id);
    setListadoTareas(temp);
  }

  return (
    <>
      <div className="main-container">
        <h1 className="letters">Todo-List</h1>
        <div className="tasks-container">
          <h2 className="letters">Lista de Tareas</h2>
          <div>
         
            {
              data.map((response, index) =>{
                return <li key={index}>{response.label}</li>
              })
            }
           
          </div>
          <div className="contador">{contadorTareas} Item left</div>
        </div>
      </div>
    </>
  );
};

export default Home;
