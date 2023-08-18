import { useState, useEffect } from "react";
// Starting with "use" is a must for custom hooks
const useCounter = (forwards = true) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (forwards) {
				setCounter((prevCounter) => prevCounter + 1);
			} else {
				setCounter((prevCounter) => prevCounter - 1);
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [forwards]);

	return counter;
};

export default useCounter;
