import { motion } from 'framer-motion';
import React from 'react';
import avenImg from '../Assets/aventador.png';
import huraImg from '../Assets/huracan.png';
import urusImg from '../Assets/urus.png';

const Model = () => {
	return (
		<div>
			<div
				className="w-full h-full bg-[#969696]  mx-auto relative overflow-hidden lg:w-full lg:h-full lg:bg-white lg:pt-52"
				id="model"
			>
				<h1 className="font-cinzel font-normal text-center text-[#8a8a8a65] opacity-70 overflow-hidden hidden lg:flex lg:text-[220rem] lg:pb-24 lg:absolute -top-[38rem] left-0">
					L
				</h1>
				<div className="w-[90%] mx-auto">
					<motion.h1
						className="font-cinzel font-black text-center text-[#bbbbbbaf] opacity-40 pt-4 pb-10 text-8xl md:text-[10rem] overflow-hidden lg:text-[25rem] lg:pb-24 lg:absolute lg:rotate-90 top-[35rem] -right-[32rem]"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 0.5 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						Model
					</motion.h1>
					<motion.div
						className="flex flex-col justify-center items-center pb-20 gap-7 lg:gap-24"
						transition={{ staggerChildren: 1 }}
					>
						<div className="flex flex-col justify-center items-center gap-5 lg:flex-row lg:w-full lg:gap-44">
							<motion.h1
								className="font-cinzel font-bold text-4xl overflow-hidden lg:text-8xl"
								initial={{ x: -200 }}
								whileInView={{ x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 1 }}
							>
								Aventador
							</motion.h1>
							<motion.p
								className="font-roboto text-sm leading-6 text-[#292929]  md:text-base md:leading-7 lg:w-[37%]  lg:text-xl lg:leading-9 "
								initial={{ scale: 0, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								Revolutionary thinking is at the heart of every idea from
								Automobili Lamborghini. Whether it is aerospace-inspired design
								or technologies applied to the naturally aspirated V12 engine or
								carbon-fiber structure, going beyond accepted limits is part of
								our philosophy. The Aventador advances every concept of
								performance, immediately establishing itself as the benchmark
								for the super sports car sector. Giving a glimpse of the future
								today, it comes from a family of supercars already considered
								legendary.
							</motion.p>
						</div>
						<div className=" flex flex-col gap-4 justify-center items-center overflow-hidden lg:gap-9 lg:pb-32">
							<motion.div
								className="flex justify-center items-center gap-7 md:gap-12 lg:gap-20"
								initial={{ y: 200, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<div className="flex flex-col justify-center items-center">
									<p className="font-cinzel text-base md:text-lg lg:text-2xl">
										Max Speed
									</p>
									<span className="font-cinzel font-bold text-sm md:text-base lg:text-xl">
										350 km/h
									</span>
								</div>
								<div className="flex flex-col justify-center items-center">
									<p className="font-cinzel text-base md:text-lg lg:text-2xl">
										0 - 100 km/h
									</p>
									<span className="font-cinzel font-bold text-sm md:text-base lg:text-xl">
										2.9 s
									</span>
								</div>
								<div className="flex flex-col justify-center items-center">
									<p className="font-cinzel text-base md:text-lg lg:text-2xl">
										Max Power
									</p>
									<span className="font-cinzel font-bold text-sm md:text-base lg:text-xl">
										770 cv
									</span>
								</div>
							</motion.div>
							<motion.img
								src={avenImg}
								alt=""
								className="overflow-hidden md:pb-20 lg:w-[100rem] z-10"
								initial={{ y: -100, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.5 }}
							/>
							<span className="font-cinzel text-sm md:text-base lg:text-xl md:-mt-20 lg:-mt-28">
								Aventador lp 780-4 ultimae
							</span>
						</div>
					</motion.div>
					<div className="flex flex-col justify-center items-center pb-20 gap-7 lg:gap-24">
						<div className="flex flex-col justify-center items-center gap-5 lg:flex-row-reverse lg:w-full lg:gap-44">
							<motion.h1
								className="font-cinzel font-bold text-4xl overflow-hidden lg:text-8xl"
								initial={{ x: 200 }}
								whileInView={{ x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 1 }}
							>
								Huracan
							</motion.h1>
							<motion.p
								className="font-roboto text-sm leading-6 text-[#292929]  md:text-base md:leading-7 lg:w-[37%]  lg:text-xl lg:leading-9 "
								initial={{ scale: 0, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								Discover all the new models of this exclusive car family,
								created to shape to your deepest emotions. Combining the highest
								expression of Lamborghini’s power with the exclusive refinement
								of Italian handicraft, this series embodies authentic design and
								state-of-the-art mechanical technology. The Lamborghini Huracán
								is the perfect fusion of technology and design. With its crisp,
								streamlined lines, designed to cut through the air and tame the
								road, you’ll get a thrill just by looking at it. The only thing
								better than taking in this beauty from a distance is actually
								touching it. The finest Italian craftsmanship lavished on
								finishes of unprecedented prestige and quality.
							</motion.p>
						</div>
						<div className="flex flex-col gap-4 justify-center items-center overflow-hidden lg:gap-9 lg:pb-32">
							<motion.div
								className="flex justify-center items-center gap-7 md:gap-12 lg:gap-20"
								initial={{ y: 200, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<div className="flex flex-col justify-center items-center">
									<p className="font-cinzel text-base md:text-lg lg:text-2xl">
										Max Speed
									</p>
									<span className="font-cinzel font-bold text-sm md:text-base lg:text-xl">
										310 km/h
									</span>
								</div>
								<div className="flex flex-col justify-center items-center">
									<p className="font-cinzel text-base md:text-lg lg:text-2xl">
										0 - 100 km/h
									</p>
									<span className="font-cinzel font-bold text-sm md:text-base lg:text-xl ">
										3.0 s
									</span>
								</div>
								<div className="flex flex-col justify-center items-center">
									<p className="font-cinzel text-base md:text-lg lg:text-2xl">
										Max Power
									</p>
									<span className="font-cinzel font-bold text-sm md:text-base lg:text-xl ">
										470 cv
									</span>
								</div>
							</motion.div>
							<motion.img
								src={huraImg}
								alt=""
								className="overflow-hidden md:pb-20 lg:w-[100rem] z-10"
								initial={{ y: -100, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.5 }}
							/>
							<span className="font-cinzel text-sm md:text-base lg:text-xl md:-mt-20 lg:-mt-28">
								Huracan STO
							</span>
						</div>
					</div>
					<div className="flex flex-col justify-center items-center pb-20 gap-7 lg:gap-24">
						<div className="flex flex-col justify-center items-center gap-5 lg:flex-row lg:w-full lg:gap-44">
							<motion.h1
								className="font-cinzel font-bold text-4xl overflow-hidden lg:text-8xl"
								initial={{ x: -200 }}
								whileInView={{ x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 1 }}
							>
								Urus
							</motion.h1>
							<motion.p
								className="font-roboto text-sm leading-6 text-[#292929]  md:text-base md:leading-7 lg:w-[37%]  lg:text-xl lg:leading-9 "
								initial={{ scale: 0, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								Lamborghini Urus is the first Super Sport Utility Vehicle in the
								world to merge the soul of a super sports car with the
								functionality of an SUV. Powered by a 4.0-liter twin-turbo V8
								engine producing 650 CV and 850 Nm of torque, Urus accelerates
								from 0 to 62 mph in 3.6 seconds and reaches a top speed of 190
								mph. The design, performance, driving dynamics and driving
								emotion flow effortlessly into this visionary approach to
								Lamborghini DNA.
							</motion.p>
						</div>
						<div className="flex flex-col gap-4 justify-center items-center overflow-hidden lg:gap-9 ">
							<motion.div
								className="flex justify-center items-center gap-7 md:gap-12 lg:gap-20"
								initial={{ y: 200, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<div className="flex flex-col justify-center items-center">
									<p className="font-cinzel text-base md:text-lg lg:text-2xl">
										Max Speed
									</p>
									<span className="font-cinzel font-bold text-sm md:text-base lg:text-xl">
										305 km/h
									</span>
								</div>
								<div className="flex flex-col justify-center items-center">
									<p className="font-cinzel text-base md:text-lg lg:text-2xl">
										0 - 100 km/h
									</p>
									<span className="font-cinzel font-bold text-sm md:text-base lg:text-xl">
										3.6 s
									</span>
								</div>
								<div className="flex flex-col justify-center items-center">
									<p className="font-cinzel text-base md:text-lg lg:text-2xl">
										Max Power
									</p>
									<span className="font-cinzel font-bold text-sm md:text-base lg:text-xl">
										650 cv
									</span>
								</div>
							</motion.div>
							<motion.img
								src={urusImg}
								alt=""
								className="overflow-hidden md:pb-20 lg:w-[100rem] z-10"
								initial={{ y: -100, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.5 }}
							/>
							<span className="font-cinzel text-sm md:text-base lg:text-xl md:-mt-20 lg:-mt-28">
								Urus Graphite Capsule
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Model;
