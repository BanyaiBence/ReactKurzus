import classes from "./Counter.module.css";
import { useSelector, useDispatch /*, connect*/ } from "react-redux";
//import { Component } from "react";
import { counterActions } from "../store/counter";

// Function based solution
const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter.counter);
	const show = useSelector((state) => state.counter.showCounter);

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};
	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggle());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={() => dispatch(counterActions.increase(10))}>
					Increment by 10
				</button>
				<button onClick={decrementHandler}>Decrement</button>
				<button onClick={() => dispatch(counterActions.decreas(10))}>
					Decrement by 10
				</button>
				<button onClick={() => dispatch(counterActions.reset())}>
					Reset
				</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};
export default Counter;
// Class based solution
// class Counter extends Component {
// 	incrementHandler() {
// 		this.props.increment();
// 	}
// 	decrementHandler() {
// 		this.props.decrement();
// 	}
// 	toggleCounterHandler() {}
// 	render() {
// 		return (
// 			<main className={classes.counter}>
// 				<h1>Redux Counter</h1>
// 				<div className={classes.value}>{this.props.counter}</div>
// 				<div>
// 					<button onClick={this.incrementHandler.bind(this)}>
// 						Increment
// 					</button>
// 					<button onClick={this.decrementHandler.bind(this)}>
// 						Decrement
// 					</button>
// 				</div>
// 				<button onClick={this.toggleCounterHandler}>
// 					Toggle Counter
// 				</button>
// 			</main>
// 		);
// 	}
// }

// const mapStateToProps = (state) => {
// 	return {
// 		counter: state.counter,
// 	};
// };
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		increment: () => dispatch({ type: "increment" }),
// 		decrement: () => dispatch({ type: "decrement" }),
// 	};
// };

// Connect is a function that returns a function that takes a component as an argument
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
