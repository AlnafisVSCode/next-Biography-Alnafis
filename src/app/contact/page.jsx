"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactPage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Simple email validation
		const emailRegex = /\S+@\S+\.\S+/;
		if (!emailRegex.test(email)) {
			alert("Please enter a valid email address.");
			return;
		}

		setLoading(true);

		// Here you would handle the form submission.
		// This could involve sending the form data to a server or an email service.

		// Show success message and reset form
		setSuccess(true);
		setName("");
		setEmail("");
		setMessage("");
		setLoading(false);
	};

	return (
		<motion.div
			className="h-full flex items-center justify-center"
			initial={{ y: "-200vh" }}
			animate={{ y: "0%" }}
			transition={{ duration: 1 }}>
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-lg p-8 bg-white rounded shadow-lg">
				<h1 className="text-2xl font-bold mb-8 text-center">Contact Me</h1>
				{success && (
					<p className="text-green-500">Your message has been sent!</p>
				)}
				<input
					type="text"
					name="name"
					placeholder="Your Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="block w-full mb-4 p-2 border border-gray-300 rounded"
					required
				/>
				<input
					type="email"
					name="email"
					placeholder="Your Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="block w-full mb-4 p-2 border border-gray-300 rounded"
					required
				/>
				<textarea
					name="message"
					placeholder="Your Message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					className="block w-full mb-4 p-2 border border-gray-300 rounded"
					required
				/>
				<button
					type="submit"
					className="block w-full py-3 px-4 text-white rounded bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
					disabled={loading}>
					{loading ? "Sending..." : "Send Message"}
				</button>
			</form>
		</motion.div>
	);
};

export default ContactPage;
