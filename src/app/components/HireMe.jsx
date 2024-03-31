import React from "react";
import { CircularText } from "./Icons";

const HireMe = () => {
	return (
		<div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
			<div className="w-48 h-auto flex items-center justify-center relative">
				<CircularText
					className={"fill-black animate-spin-slow stroke-pink-500"}
				/>
				<button className="bg-yellow-950 text-yellow-400 border border-yellow-400 border-b-4 font-medium overflow-hidden px-4 py-2 rounded-full hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20">
					<span className="bg-yellow-400 shadow-yellow-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
					Email
				</button>
			</div>
		</div>
	);
};

export default HireMe;
