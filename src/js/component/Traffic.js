import React, { useState, useEffect } from "react";

//include images into your bundle

//create your first component

const Traffic = () => {
	const [light, setLight] = useState("red");

	useEffect(() => {
		const timer = setTimeout(function() {
			if (light === "red") {
				setLight("green");
			} else if (light === "yellow") {
				setLight("red");
			} else if (light === "green") {
				setLight("yellow");
			} else useEffect(light);
		}, 5000);
	});

	return (
		<>
			<div className="pole mx-auto bg-dark"></div>

			<div className="lamp text-center">
				<div className="col-2 mx-auto p-2 bg-dark rounded-pill ">
					<div className="p-2">
						{light === "red" ? (
							<div className="lights redShadow mx-auto my-2 rounded-circle bg-danger"></div>
						) : (
							<div className="lights blackShadow mx-auto my-2 rounded-circle bg-dark"></div>
						)}
					</div>
					<div className="p-2">
						{light === "yellow" ? (
							<div className="lights yellowShadow mx-auto my-2 rounded-circle bg-warning"></div>
						) : (
							<div className="lights blackShadow mx-auto my-2 rounded-circle bg-dark"></div>
						)}
					</div>
					<div className="p-2">
						{light === "green" ? (
							<div className="lights greenShadow mx-auto my-2 rounded-circle bg-success"></div>
						) : (
							<div className="lights blackShadow mx-auto my-2 rounded-circle bg-dark"></div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Traffic;
