import React from "react";

export const Footer = () => {
	return (
		<footer className="w-full h-20 bg-black text-white flex justify-center items-center">
			<span>
				&copy;
				{new Date().getFullYear()} Alnafis Chowdhury. All Rights Reserved.
			</span>

			{/* <p className="text-center">
				© 2024 Alnafis Chowdhury. All rights reserved.
			</p> */}
		</footer>
	);
};

export default Footer;
