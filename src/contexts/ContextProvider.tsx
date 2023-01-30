import { StaticHandlerContext } from "@remix-run/router";
import React, { createContext, useContext, useState } from "react";

const StateContext: any = createContext();

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};

export const ContextProvider = ({ children }: any) => {
	const [activeMenu, setActiveMenu] = useState<boolean>(true);
	const [isClicked, setIsClicked] = useState<object>(initialState);
	const [screenSize, setScreenSize] = useState<unknown>(undefined);
	const handleClick = (clicked: any) => {
		setIsClicked({ ...initialState, [clicked]: true });
	};
	return (
		<StateContext.Provider
			value={{
				activeMenu,
				setActiveMenu,
				isClicked,
				setIsClicked,
				handleClick,
				screenSize,
				setScreenSize,
			}}>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
