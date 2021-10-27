import React, { useState } from "react";

//include images into your bundle

//create your first component
const Traffic = () => {
	const [toggle, setToggle] = useState("off");
	return (
		<div className="lamp text-center mt-5 ">
			<div className="col-2 mx-auto p-2 bg-dark rounded-pill ">
				<div className="lights mx-auto my-2 rounded-circle bg-danger"></div>
				<div className="lights mx-auto my-2 rounded-circle bg-warning"></div>
				<div className="lights mx-auto my-2 rounded-circle bg-success"></div>
			</div>
		</div>
	);
};

export default Traffic;
