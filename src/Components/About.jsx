import { motion } from 'framer-motion';
import React from 'react';
import aboutImg from '../Assets/about.png';

const About = () => {
	return (
		<motion.div
			className="w-full h-full bg-black pb-5  mx-auto  relative overflow-hidden lg:w-full lg:h-[1000px]"
			id="about"
			transition={{ staggerChildren: 0.5 }}
		>
			<div className="w-[90%] mx-auto">
				<div className="hidden lg:flex lg:absolute right-0 lg:bg-[#ffffff] lg:h-[1000px] lg:w-[45%]"></div>
				<div className="flex flex-col justify-center items-center lg:flex-row">
					<motion.h1
						className="font-cinzel font-black text-[#bfbfbf7c] opacity-40 pt-4 pb-9 text-8xl md:text-[10rem] overflow-hidden lg:text-[30rem] lg:absolute top-36 left-4"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 0.5 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						About
					</motion.h1>
					<motion.p
						className="font-roboto text-sm leading-6 text-[#D1D1D1] pb-5  md:text-base md:leading-7 lg:absolute lg:w-[40%] top-40 right-16 lg:text-xl lg:leading-9 lg:text-black"
						initial={{ scale: 0, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						Founded in 1963, Automobili Lamborghini is headquartered in
						Sant’Agata Bolognese, in Northern Italy. Lamborghini currently
						produces two super sports car models, the V12-powered Aventador,
						launched in 2011, and the V10-powered Huracán, launched in 2014,
						along with the Urus Super SUV powered by a twin-turbo V8 engine,
						launched in 2017. With 167 dealerships throughout the world, the
						company has seen global sales growth for the last nine consecutive
						years, with 8,205 cars delivered in 2019. Over half a century
						Automobili Lamborghini created a continuous series of dream cars,
						including the 350 GT, Miura, Espada, Countach, Diablo, Murciélago,
						as well as limited editions such as the Reventón, Sesto Elemento,
						Veneno and the Centenario. With the Lamborghini Sián FKP 37 unveiled
						in 2019, a few-off build of only 63 units, the company delivers
						unique new hybrid technologies, featuring the world-first
						application of a supercapacitor for hybridization, new materials
						technology, and unsurpassed Lamborghini performance.
					</motion.p>
					<div className="lg:absolute -bottom-56 -left-96">
						<motion.img
							src={aboutImg}
							alt=""
							className="overflow-hidden md:pb-20 lg:w-[100rem]"
							initial={{ x: -200 }}
							whileInView={{ x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 1 }}
						/>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
