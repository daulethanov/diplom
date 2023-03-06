import React from "react";
import './buttonForm.css';

function ButtonFormAuth({ props, children }) {

	return (
		<button {...props} className="button__form">{children}</button>
	)

}

export default ButtonFormAuth;