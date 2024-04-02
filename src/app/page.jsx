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
						className="font-satoshi text-4xl md:text-6xl font-bold "
						style={{ fontFamily: "Satoshi" }}>
						Hello, I&apos;m Alnafis Chowdhury{" "}
					</h1>
					{/* description */}
					<p className="text-lg">
						Software Engineer, Web Developer, and UI/UX Designer based in London
					</p>

					{/* BUTTONS */}
					<div className=" flex gap-4 w-fit pr-5 ">
						<Link
							href="/AlnafisChowdhury_Resume.pdf"
							target={"_blank"}
							className="cursor-pointer group relative flex justify-center items-center gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
							download={true}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								height="24px"
								width="24px">
								<g stroke-width="0" id="SVGRepo_bgCarrier"></g>
								<g
									stroke-linejoin="round"
									stroke-linecap="round"
									id="SVGRepo_tracerCarrier"></g>
								<g id="SVGRepo_iconCarrier">
									<g id="Interface / Download">
										<path
											stroke-linejoin="round"
											stroke-linecap="round"
											stroke-width="2"
											stroke="#f1f1f1"
											d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
											id="Vector"></path>
									</g>
								</g>
							</svg>
							Résumé / CV
							<div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
								Download
							</div>
						</Link>
						{/* <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
							View My Work
						</button> */}
						<button
							style={{
								position: "relative",
								borderRadius: "30px",
								background: "#183153",
								fontFamily: "Satoshi",
								boxShadow: "0px 6px 24px 0px rgba(0, 0, 0, 0.2)",
								overflow: "hidden",
								cursor: "pointer",
								border: "none",
								display: "flex",
								alignItems: "center",
							}}
							onMouseOver={(e) => {
								e.currentTarget.style.background = "#ffd401";
								e.currentTarget.childNodes[0].style.color = "#183153";
							}}
							onMouseOut={(e) => {
								e.currentTarget.style.background = "#183153";
								e.currentTarget.childNodes[0].style.color = "#fff";
							}}>
							<span
								style={{
									textAlign: "center",
									textDecoration: "none",
									width: "100%",
									padding: "18px 25px",
									color: "#fff",
									fontSize: "1.125em",
									fontWeight: "700",
									letterSpacing: "0.3em",
									zIndex: "20",
									transition: "all 0.3s ease-in-out",
								}}>
								Contact
							</span>
						</button>
					</div>
				</div>
			</div>
			<HireMe />

			<div>
				{/* <Image src="" alt="Codebucks" className="w-full h-auto" /> */}
				{/* <div
					className="text-4xl md:text-6xl font-bold"
					style={{ fontFamily: "Satoshi" }}>
					This is Satoshi font
				</div>{" "} */}
			</div>
			{/* FOOTER */}
			<Footer />
		</motion.div>
	);
};

export default Homepage;
