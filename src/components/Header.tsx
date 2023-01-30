import React from "react";

interface HeaderProps {
	title: string;
	category: string;
}

const Header = ({ title, category }: HeaderProps) => {
	return (
		<div className="mb-10">
			<p className="text-gray-400">{category}</p>
			<p className="text-3xl text-slate-900 font-extrabold tracking-tight">
				{title}
			</p>
		</div>
	);
};

export default Header;
