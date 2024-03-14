"use client";
import { motion } from "framer-motion";

const TestPage = () => {
	return (
		<div className=" h-full flex items-center justify-center">
			<motion.div
				className="w-96 h-96 bg-red-400 rounded"
				initial={{ x: -100, opacity: 0 }}
				animate={{ x: 400, y: 300, opacity: 0.5 }}
				transition={{
					duration: 0.8,
					delay: 0.2,
					ease: [0, 0.71, 0.2, 1.01],
				}}></motion.div>
		</div>
	);
};

export default TestPage;
