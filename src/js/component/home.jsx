import React from "react";
import List from "./list";

//create your first component
const Home = () => {


	return (
		<div className="main-container">
        <h1 className="letters">Api-Todo-List</h1>
			<div className="tasks-container">
				<List />	
			</div>		
		</div>
	);
};

export default Home;