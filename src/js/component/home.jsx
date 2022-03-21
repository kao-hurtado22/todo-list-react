import React from "react";
import "../../styles/index.css";
import TodoList from "./todolist";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="todo-app">
			<TodoList />
		</div>
	);
};

export default Home;
