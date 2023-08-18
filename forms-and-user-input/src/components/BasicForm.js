import useInput from "../hooks/use-input";

const emailValidator = (email) => {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const BasicForm = (props) => {
	const {
		value: firstName,
		hasError: firstNameHasError,
		valueIsValid: firstNameIsValid,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: firstNameReset,
	} = useInput((value) => value.trim() !== "");
	const {
		value: lastName,
		hasError: lastNameHasError,
		valueIsValid: lastNameIsValid,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: lastNameReset,
	} = useInput((value) => value.trim() !== "");
	const {
		value: email,
		hasError: emailHasError,
		valueIsValid: emailIsValid,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: emailReset,
	} = useInput(emailValidator);

	let formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

	const submitFormHandler = (event) => {
		event.preventDefault();
		if (!formIsValid) {
			return;
		}
		console.log(firstName);
		console.log(lastName);
		console.log(email);
		firstNameReset();
		lastNameReset();
		emailReset();
	};
	const firstNameClasses = firstNameHasError
		? "form-control invalid"
		: "form-control";
	const lastNameClasses = lastNameHasError
		? "form-control invalid"
		: "form-control";
	const emailClasses = emailHasError
		? "form-control invalid"
		: "form-control";

	return (
		<form onSubmit={submitFormHandler}>
			<div className="control-group">
				<div className={firstNameClasses}>
					<label htmlFor="name">First Name</label>
					<input
						type="text"
						id="name"
						onChange={firstNameChangeHandler}
						onBlur={firstNameBlurHandler}
						value={firstName}
					/>
					{firstNameHasError && (
						<p className="error-text">
							First name cannot be empty!
						</p>
					)}
				</div>
				<div className={lastNameClasses}>
					<label htmlFor="name">Last Name</label>
					<input
						type="text"
						id="name"
						onChange={lastNameChangeHandler}
						onBlur={lastNameBlurHandler}
						value={lastName}
					/>
					{lastNameHasError && (
						<p className="error-text">Last name cannot be empty!</p>
					)}
				</div>
			</div>
			<div className={emailClasses}>
				<label htmlFor="name">E-Mail Address</label>
				<input
					type="text"
					id="name"
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

export default BasicForm;
