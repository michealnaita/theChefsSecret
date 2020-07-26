import React from "react";
import "./Scroll.css";

const Scroll = (props) => {
	return (
		<div style={{ overflowY: "scroll", height: "100%", width: "100%" }}>
			{props.children}
		</div>
	);
};

export default Scroll;
