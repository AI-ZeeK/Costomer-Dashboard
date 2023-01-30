import React from "react";

interface BtnProps {
	color: string;
	bgColor: string;
	text: string;
	borderRadius: string;
	size: string;
}

const Button = ({ color, bgColor, text, borderRadius, size }: BtnProps) => {
	return (
		<button
			type="button"
			style={{ backgroundColor: bgColor, color, borderRadius }}
			className={`text=${size} p-3 hover:drop-shadow-lg transition-all`}>
			{text}
		</button>
	);
};

export default Button;
