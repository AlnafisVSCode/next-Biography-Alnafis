import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
	return (
		<div className="flex items-center justify-center mt-2">
			<MotionLink
				href="/"
				className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center scale-110 hover:scale-125 transition-transform duration-300 ease-in-out"
				whileHover={{
					backgroundColor: [
						"#ff6347", // Tomato
						"#ee82ee", // Violet
						"#40e0d0", // Turquoise
						"#3cb371", // Medium Sea Green
					],
					transition: { duration: 1, repeat: Infinity },
				}}>
				<span className="text-white mr-1">Alfie</span>
				<span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
					.dev
				</span>
			</MotionLink>
		</div>
	);
};

export default Logo;
