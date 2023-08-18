import style from "./Input.module.css";
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
	return (
		<div className={style.input}>
			<label htmlFor={props.input.id}>{props.label}</label>
			<input ref={ref} {...props.input} />
		</div>
	);
});

export default Input;
