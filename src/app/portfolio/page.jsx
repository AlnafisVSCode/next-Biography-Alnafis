"use client";
import { motion } from "framer-motion";

const PortfolioPage = () => {
	return (
		<motion.div
			className="h-full"
			initial={{ y: "-200vh" }}
			animate={{ y: "0%" }}
			transition={{ duration: 1 }}
			style={{
				backgroundColor: "rgba(0, 0, 0, 0.7)", // Add this line
				opacity: 1,
				transform: "none",
			}} // Add this line }} // Add this line
		>
			<div className="projects-left">{/* Add your project images here */}</div>
			<div
				className="projects-right"
				style={{
					opacity: 1,
					transform: "none",
				}}>
				<div style={{ opacity: 1, transform: "none" }}>
					<div>
						<div className="page-head">
							<h2 className="page-title">Projets</h2>
							<h5 className="elements-number">9</h5>
						</div>
						<hr className="head-separator" />
					</div>
				</div>
				<ul>
					{/* Add your portfolio items here */}
					<li style={{ opacity: 1, transform: "none" }}>
						<a href="/fr/work/sharlee">
							<div className="projects-row">
								<div className="projects-row-left">
									<div className="projects-selected-wrapper">
										<h4
											className="projects-selected"
											style={{
												transform: "translateX(-100%) translateZ(0px)",
												filter: "blur(5px)", // Add this line
											}}>
											→
										</h4>
									</div>
									<h4 className="projects-title" style={{ transform: "none" }}>
										Sharlee
									</h4>
								</div>
								<div className="projects-row-right">
									<p className="projects-category">Branding</p>
								</div>
							</div>
						</a>
					</li>
					{/* Add more portfolio items as needed */}
					{/* ... */}
				</ul>
			</div>
		</motion.div>
	);
};

export default PortfolioPage;
