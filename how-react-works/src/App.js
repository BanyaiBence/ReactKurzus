import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/demo/DemoOutput";
import "./App.css";

function App() {
	const [showParagraph, setShowParagraph] = useState(false);
	const [allowToggle, setAllowToggle] = useState(false);
	// Use useCallback to prevent the function passed to the Button component as a prop from being re-created every time the App component re-renders.

	const toggleParagraphHandler = useCallback(() => {
		if (allowToggle) {
			setShowParagraph((prevShowParagraph) => !prevShowParagraph);
		}
	}, [allowToggle]);

	const allowToggleHandler = () => {
		setAllowToggle(!allowToggle);
	};

	console.log("APP RUNNING");

	return (
		<div className="app">
			<h1>Hi there!</h1>
			<DemoOutput show={showParagraph} />

			<Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
			<Button onClick={allowToggleHandler}>Allow Toggling!</Button>
		</div>
	);
}

export default App;
