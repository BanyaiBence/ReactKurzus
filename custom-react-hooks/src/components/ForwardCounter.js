import useCounter from "../hooks/use-counter";
import Card from "./Card";

const ForwardCounter = () => {
	// the custom hook's state is now available in the component
	const counter = useCounter();

	return <Card>{counter}</Card>;
};

export default ForwardCounter;
