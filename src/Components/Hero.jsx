import { motion } from 'framer-motion';
import React from 'react';
import logo from '../Assets/logo.png';

const Hero = () => {
	return (
		<div className="w-full h-screen heroImg " id="home">
			<motion.div
				className="fixed bg-black top-0 left-0 w-full h-full z-40 flex flex-col justify-center overflow-hidden items-center"
				initial={{ y: 0 }}
				animate={{ y: -2000 }}
				transition={{ duration: 1, delay: 2 }}
			>
				<motion.img
					src={logo}
					alt=""
					className="w-24 lg:w-32"
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 1 }}
				/>
				<motion.h1
					className="font-cinzel text-white text-4xl lg:text-7xl py-5 overflow-hidden lg:pb-4"
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 1 }}
				>
					Lamborghini
				</motion.h1>
			</motion.div>
			<div className="flex flex-col justify-center items-center relative mx-auto h-full w-[95%]">
				<div className="flex flex-col justify-center gap-3 h-full my-auto items-center">
					<motion.h2
						className="font-cinzel text-gray-300 text-2xl md:text-3xl lg:text-5xl overflow-hidden"
						initial={{ y: 100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 2.5 }}
					>
						Welcome to
					</motion.h2>
					<motion.h1
						className="font-cinzel font-bold text-gray-300 text-5xl  md:text-[6rem] lg:text-[10rem] overflow-hidden"
						initial={{ y: 100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 3 }}
					>
						Lamborghini
					</motion.h1>
					<motion.div
						className="flex justify-center items-center gap-2 lg:gap-5"
						initial={{ y: 100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 3.5 }}
					>
						<span class="block w-12 md:w-28 lg:w-60 h-[1px] bg-white"></span>
						<p className="font-cinzel font-black text-gray-400 text-lg md:text-2xl lg:text-4xl overflow-hidden">
							Expect the Unexpected
						</p>
						<span class="block w-12 md:w-28 lg:w-60 h-[1px] bg-white"></span>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
