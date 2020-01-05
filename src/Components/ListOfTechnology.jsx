import React, { useContext } from "react";
import Technology from "./Technology";
import { TechContext } from "./TechContext";

export default function ListOfTechnology() {
	const value = useContext(TechContext);
	return (
		<div>
			{value.map(item => (
				<Technology
					id={item.id}
					name={item.name}
					version={item.version}
					stack={item.stack}
				></Technology>
			))}
		</div>
	);
}
