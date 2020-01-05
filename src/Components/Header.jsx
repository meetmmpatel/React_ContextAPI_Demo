import React, { useContext } from "react";
import { TechContext } from "./TechContext";
export default function Header() {
	const value = useContext(TechContext);
	return (
		<div>
			<nav class="navbar navbar-light bg-light">
				Total Technology List : {value.length}
			</nav>
		</div>
	);
}
