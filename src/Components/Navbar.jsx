import { motion } from 'framer-motion';
import React, { useState } from 'react';
import logo from '../Assets/logo.png';

const navAnimate = {
	offscreen: { y: -30, opacity: 0 },
	onscreen: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.5, delay: 2.5 },
	},
};

const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false);
	return (
		<>
			{!navOpen} ? (
			<nav className="w-full fixed top-0 bg-black z-20 py-3 lg:py-4">
				<motion.div
					className="flex justify-between items-center mx-auto w-[95%] md:w-[90%]"
					initial={'offscreen'}
					animate={'onscreen'}
					transition={{ staggerChildren: 0.2 }}
				>
					<motion.div
						className="w-16 md:w-[5rem] lg:w-[5rem]"
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1, delay: 2.5 }}
					>
						<a href="#">
							<img src={logo} alt="" />ß
						</a>
					</motion.div>
					<motion.div className="hidden md:flex justify-center items-center space-x-10">
						<motion.a
							href="#home"
							className="font-cinzel font-bold uppercase md:text-base lg:text-xl text-white hover:text-gray-500 ease-in-out duration-300"
							variants={navAnimate}
						>
							Home
						</motion.a>
						<motion.a
							href="#about"
							className="font-cinzel font-bold uppercase md:text-base lg:text-xl text-white hover:text-gray-500 ease-in-out duration-300"
							variants={navAnimate}
						>
							About
						</motion.a>
						<motion.a
							href="#design"
							className="font-cinzel font-bold uppercase md:text-base lg:text-xl text-white hover:text-gray-500 ease-in-out duration-300"
							variants={navAnimate}
						>
							Design
						</motion.a>
						<motion.a
							href="#model"
							className="font-cinzel font-bold uppercase md:text-base lg:text-xl text-white hover:text-gray-500 ease-in-out duration-300"
							variants={navAnimate}
						>
							Models
						</motion.a>
					</motion.div>
					<motion.div
						class="space-y-2 md:hidden"
						initial={{ x: 100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1, delay: 2.5 }}
						onClick={() => setNavOpen(!navOpen)}
					>
						<span class="block w-8 h-[1px] bg-gray-200"></span>
						<span class="block w-8 h-[1px] bg-gray-200"></span>
						<span class="block w-5 h-[1px] bg-gray-200"></span>
					</motion.div>
				</motion.div>
			</nav>
			):(
			<div
				className={`w-1/2 h-screen fixed  md:hidden right-0 z-30 bg-black ${
					navOpen ? 'translate-x-0' : 'translate-x-full'
				} transition-all duration-200 `}
			>
				<div
					className="fixed right-0 top-7 space-y-6 overflow-hidden"
					onClick={() => setNavOpen(!navOpen)}
				>
					<span class="block w-[6rem] h-[3px] bg-gray-200 rotate-45"></span>
					<span class="block w-[6rem] h-[3px] bg-gray-200 -rotate-45"></span>
				</div>
				<div className="flex flex-col justify-center items-left pl-6 h-full lg:hidden">
					<a
						href="#home"
						className="font-cinzel font-bold uppercase text-2xl overflow-hidden my-7 text-white hover:text-gray-500 ease-in-out duration-300"
						onClick={() => setNavOpen(!navOpen)}
					>
						Home
					</a>
					<a
						href="#about"
						className="font-cinzel font-bold uppercase text-2xl overflow-hidden my-7 text-white hover:text-gray-500  ease-in-out duration-300"
						onClick={() => setNavOpen(!navOpen)}
					>
						About
					</a>
					<a
						href="#design"
						className="font-cinzel font-bold uppercase text-2xl overflow-hidden my-7 text-white hover:text-gray-500  ease-in-out duration-300"
						onClick={() => setNavOpen(!navOpen)}
					>
						Design
					</a>
					<a
						href="#model"
						className="font-cinzel font-bold uppercase text-2xl overflow-hidden my-7 text-white hover:text-gray-500  ease-in-out duration-300"
						onClick={() => setNavOpen(!navOpen)}
					>
						Models
					</a>
				</div>
			</div>
		</>
	);
};

export default Navbar;
