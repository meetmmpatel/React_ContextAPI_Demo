import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListOfTechnology from "./Components/ListOfTechnology";
import Header from "./Components/Header";
import { TechProvider } from "./Components/TechContext";

function App() {
	return (
		<TechProvider>
			<div className="App">
				<Header></Header>
				<ListOfTechnology></ListOfTechnology>
			</div>
		</TechProvider>
	);
}

export default App;
