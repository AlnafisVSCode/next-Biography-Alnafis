import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const LogoLink = () => (
	<MotionLink
		href="/"
		className="text-xl font-bold flex items-center justify-center transition-all duration-500 ease-in-out"
		whileHover={{
			color: ["#FF6347", "#1DB954", "#0000FF", "#FFFF00"],
			scale: 1.1,
			transition: { duration: 1, repeat: Infinity },
		}}>
		<span className="text-black mr-1">Alnafis</span>
		<span className="text-blue-500 bg-yellow-300 px-1 rounded">.dev</span>
	</MotionLink>
);

const Logo = () => (
	<div className="flex items-center justify-center h-screen">
		<LogoLink />
	</div>
);

export default Logo;
