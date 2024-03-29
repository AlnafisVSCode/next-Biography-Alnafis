"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { LinkArrow } from "./components/Icons";
import Footer from "./components/Footer";
import HireMe from "./components/HireMe";

const Homepage = () => {
	return (
		<motion.div
			className="h-full"
			initial={{ y: "-200vh" }}
			animate={{ y: "0%" }}
			transition={{ duration: 1 }}>
			<div className=" h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
				{/* IMAGE CONTAINER */}
				<div className="h-1/2 lg:h-full lg:w-1/2 relative">
					<Image src="/01.png" alt="" fill className="object-contain" />
				</div>
				{/* TEXT CONTAINER */}
				<div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
					{/* title */}
					<h1
						className="text-4xl md:text-6xl font-bold "
						style={{ fontFamily: "Satoshi" }}>
						Welcome to my Portfolio
					</h1>
					{/* description */}
					<p className="text-lg">
						As a junior software engineer, I am passionate about creating
						innovative and efficient solutions. With a strong foundation in
						programming and problem-solving, I strive to deliver high-quality
						code and exceed client expectations. I am constantly learning and
						exploring new technologies to stay up-to-date with the latest
						industry trends. Welcome to my portfolio, where you can explore my
						projects and see my skills in action.
					</p>

					{/* BUTTONS */}
					<div className="w-full flex gap-4">
						<Link
							href="/AlnafisChowdhury_Resume.pdf"
							target={"_blank"}
							className="p-4 flex rounded-lg ring-1 ring-black bg-black text-white font-semibold hover:bg-lime-300 hover:text-black
							border-2 border-solid border-transparent hover:border-black"
							download={true}>
							Resume/CV <LinkArrow className={"w-6 ml-1"} />
						</Link>
						{/* <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
							View My Work
						</button> */}
						<button className="p-4 rounded-lg ring-1 ring-black bg-white text-black">
							Contact Me
						</button>
					</div>
				</div>
			</div>
			<HireMe />

			<div>
				{/* <Image src="" alt="Codebucks" className="w-full h-auto" /> */}
				<div
					className="text-4xl md:text-6xl font-bold"
					style={{ fontFamily: "Satoshi" }}>
					This is Satoshi font
				</div>{" "}
			</div>
			{/* FOOTER */}
			<Footer />
		</motion.div>
	);
};

export default Homepage;
