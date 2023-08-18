import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
	console.log("DEMO OUTPUT RUNNING");
	return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

// React.memo only re-renders the component if the props change.
// But it compares the props, which comes with a performance cost, so it's not always a good idea to use it. It worths it if the component and its component branch are expensive to render.

export default React.memo(DemoOutput);
