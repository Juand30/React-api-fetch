import React, { useEffect, useState } from "react";
import Form from "./Form";

const Home = () => {
  const [data, setData] = useState([]);
  const [tarea, setTarea] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  
    // if (tarea === "") {
    //   alert("Debes agregar una tarea");
    //   return;
    // }
  
    const nuevaTarea = { label: tarea, done: false };
    setData([...data, nuevaTarea]);
    setTarea("");
  
    sendData(nuevaTarea);
  }

  useEffect(() => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/juand")
      .then((response) => response.json())
      .then((response) => {
        console.log("Respuesta:", response);
        setData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setData((prevData) => {
      const newData = [...prevData];
      newData[inputName].label = inputValue;
      return newData;
    });
  }

  function sendData() {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/juand", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <>
      <div className="main-container">
        <h1 className="letters">Todo-List</h1>
        <div className="tasks-container">
          <h2 className="letters">Lista de Tareas</h2>
          <input type="text" name="0" onChange={handleChange} />
          <div>
            {data.map((data, index) => (
              <div key={index}>{data.label}</div>
            ))}
          </div>
          <button onClick={handleSubmit}>Guardar Cambios</button>
        </div>
      </div>
    </>
  );
};

export default Home;
