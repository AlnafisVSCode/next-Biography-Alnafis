import Image from "next/image";

const Homepage = () => {
	return (
		<div className=" h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
			{/* IMAGE CONTAINER */}
			<div className="h-1/2 lg:h-full lg:w-1/2 relative">
				<Image src="/hero.png" alt="" fill className="object-contain" />
			</div>
			{/* TEXT CONTAINER */}
			<div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
				{/* title */}
				<h1 className="text-4xl md:text-6xl font-bold ">
					Welcome to my Portfolio
				</h1>
				{/* description */}
				<p className="text-lg">
					As a junior software engineer, I am passionate about creating
					innovative and efficient solutions. With a strong foundation in
					programming and problem-solving, I strive to deliver high-quality code
					and exceed client expectations. I am constantly learning and exploring
					new technologies to stay up-to-date with the latest industry trends.
					Welcome to my portfolio, where you can explore my projects and see my
					skills in action.
				</p>

				{/* BUTTONS */}
				<div className="w-full flex gap-4">
					<button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
						View My Work
					</button>
					<button className="p-4 rounded-lg ring-1 ring-black bg-white text-black">
						Contact Me
					</button>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
