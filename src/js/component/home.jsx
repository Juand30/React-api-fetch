import React from "react";
import ApiList from "./apiList";

//create your first component
const Home = () => {


	return (
		<div className="main-container">
        <h1 className="letters">Api-Todo-List</h1>
			<div className="tasks-container">
				<ApiList />	
			</div>		
		</div>
	);
};

export default Home;