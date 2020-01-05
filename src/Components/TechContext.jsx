import React, { useState, createContext } from "react";

/*
Create Two const functions and first should be initalizing create context
Another functions should be data provider 
*/

//Import this it child component the you want ot consume data to
export const TechContext = createContext();

// Must be imported to App.js file and wrap about main div
export const TechProvider = props => {
	const [technology] = useState([
		{ id: 1, name: "React ", version: 16.7, stack: "javascript" },
		{ id: 2, name: "Redux", version: 7.4, stack: "javascript" },
		{ id: 3, name: "JSX", version: 7, stack: "HTML" },
		{ id: 4, name: "HTML", version: 5, stack: "HTML" },
		{ id: 5, name: "Java", version: 11, stack: "Java" }
	]);

	return (
		<TechContext.Provider value={technology}>
			{props.children}
		</TechContext.Provider>
	);
};
