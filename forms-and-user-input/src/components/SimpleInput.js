import useInput from "../hooks/use-input";

const emailValidator = (email) => {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const SimpleInput = (props) => {
	const {
		value: name,
		hasError: nameHasError,
		valueIsValid: nameIsValid,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetName,
	} = useInput((value) => value.trim() !== "");
	const {
		value: email,
		hasError: emailHasError,
		valueIsValid: emailIsValid,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmail,
	} = useInput(emailValidator);

	let formIsValid = false;
	if (nameIsValid && emailIsValid) {
		formIsValid = true;
	}

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (!nameIsValid || !emailIsValid) {
			return;
		}
		console.log(name);
		console.log(email);
		resetName();
		resetEmail();
	};

	const nameInputClasses = nameHasError
		? "form-control invalid"
		: "form-control";
	const emailInputClasses = emailHasError
		? "form-control invalid"
		: "form-control";

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={nameChangeHandler}
					onBlur={nameBlurHandler}
					value={name}
				/>
				{nameHasError && (
					<p className="error-text">Name must not be empty!</p>
				)}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor="email">Your Email</label>
				<input
					type="email"
					id="email"
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					value={email}
				/>
				{emailHasError && (
					<p className="error-text">Email must be valid!</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
