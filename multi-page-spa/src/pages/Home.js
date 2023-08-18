import { Link, useNavigate } from "react-router-dom";

function HomePage() {
	const navigate = useNavigate();

	const navigateHandler = () => {
		navigate("products");
	};
	return (
		<>
			<h1>Home</h1>
			<button onClick={navigateHandler}>To products</button>
		</>
	);
}

export default HomePage;
