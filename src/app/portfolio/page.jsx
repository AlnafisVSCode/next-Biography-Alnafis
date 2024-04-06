"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
	{
		id: 1,
		color: "from-red-300 to-blue-300",
		title: "IOS Finance App ",
		desc: "Experience financial empowerment with our iOS Finance App, meticulously crafted in Swift. Seamlessly manage your expenses, track investments, and stay on top of your financial goals with intuitive features and elegant design. From budget planning to real-time market updates, empower your financial journey with our user-friendly interface and secure, reliable performance. Take control of your finances, anytime, anywhere.",
		img: "",
		link: "https://github.com/AlnafisVSCode/IOSFinanceApp",
	},
	{
		id: 2,
		color: "from-blue-300 to-violet-300",
		title: "Movie Management App",
		desc: "Streamline your movie collection with our Java Movie Management App. Built with Java, it offers effortless organization and seamless access to your entire movie library. Utilizing the IMDB API integration, effortlessly search for movies and access detailed ratings, reviews, and essential information. From classic favorites to the latest releases, simplify your movie-watching experience with our intuitive interface and comprehensive features. Enjoy hassle-free movie management and discover your next cinematic adventure with ease.",
		img: "",
		link: "https://github.com/AlnafisVSCode/MovieManagementApp",
	},
	{
		id: 3,
		color: "from-violet-300 to-purple-300",
		title: "Forecast Application ",
		desc: "Experience weather forecasting like never before with our Swift-built Forecast Application. Seamlessly merging precise predictions and elegant design, stay informed with up-to-the-minute updates and comprehensive insights. From detailed hourly forecasts to extended outlooks, empower your daily planning with accuracy and simplicity. Rain or shine, stay ahead of the weather curve with our intuitive interface and dependable performance. Navigate forecasts effortlessly and tackle every day with confidence.",
		img: "",
		link: "https://github.com/AlnafisVSCode/ForecastApplication",
	},
	{
		id: 4,
		color: "from-purple-300 to-red-300",
		title: "Spotify Music App",
		desc: "Music App with React, Redux, and Spotify API. Immerse yourself in the world of music with the Spotify Music App. Explore millions of tracks, curated playlists, and personalized recommendations tailored just for you. Whether you're discovering new artists or rediscovering old favorites, enjoy seamless streaming, offline listening, and exclusive content—all in one place. With intuitive navigation and endless possibilities, let the rhythm of Spotify enhance every moment of your musical journey.",
		img: "",
		link: "",
	},
];

const PortfolioPage = () => {
	const ref = useRef();

	// Use framer-motion hooks for scroll animation
	const { scrollYProgress } = useScroll({ target: ref });
	const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

	return (
		<motion.div
			className="h-full"
			initial={{ y: "-200vh" }}
			animate={{ y: "0%" }}
			transition={{ duration: 1.5 }}>
			{" "}
			{/* Changed animation duration */}
			<div className="h-[600vh] relative" ref={ref}>
				<div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
					My Works
				</div>
				<div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
					<motion.div style={{ x }} className="flex">
						<div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
						{items.map((item) => (
							<div
								className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
								key={item.id}>
								<div className="flex flex-col gap-8 text-white">
									<h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
										{item.title}
									</h1>
									<div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
										<Image src={item.img} alt={item.title} fill />{" "}
										{/* Added alt text */}
									</div>
									<p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
										{item.desc}
									</p>
									<Link href={item.link} className="flex justify-end">
										<button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
											See Demo
										</button>
									</Link>
								</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>
			<div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
				<h1 className="text-8xl">Do you have a project?</h1>
				<div className="relative">
					<motion.svg
						animate={{ rotate: 360 }}
						transition={{ duration: 10, ease: "linear", repeat: Infinity }}
						viewBox="0 0 300 300"
						className="w-64 h-64 md:w-[500px] md:h-[500px] ">
						<defs>
							<path
								id="circlePath"
								d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
							/>
						</defs>
						<text fill="#000">
							<textPath xlinkHref="#circlePath" className="text-xl">
								Front-end Developer and UI Designer
							</textPath>
						</text>
					</motion.svg>
					<Link
						href="/contact"
						className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center">
						Hire Me
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default PortfolioPage;
