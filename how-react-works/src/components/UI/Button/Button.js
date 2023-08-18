import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
	console.log("BUTTON RUNNING");
	return (
		<button
			type={props.type || "button"}
			className={`${classes.button} ${props.className}`}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
};

// The button component is not expensive to render, so it's not worth it to use React.memo.
// The function passed to the Button component as a prop is re-created every time the App component re-renders, which means the Button component will re-render every time the App component re-renders  so it's not worth it to use React.memo.
// Primitive values are compared by value, objects are compared by reference.
export default React.memo(Button);
