import React from 'react';
import designImg from '../Assets/design.png';

const Design = () => {
	return (
		<div
			className="w-full h-full bg-[#ffffff]  mx-auto relative overflow-hidden lg:w-full lg:h-[720px]"
			id="design"
		>
			<div className="w-[90%] mx-auto">
				<div className="hidden lg:flex lg:absolute bgClip right-0"></div>
				<div className="flex flex-col justify-center items-center lg:flex-row">
					<h1 className="font-cinzel font-black text-[#787878c2] opacity-40 pt-4 pb-10 text-8xl md:text-[10rem] overflow-hidden lg:text-[25rem] lg:absolute top-12 left-4 ">
						Design
					</h1>
					<p className="font-roboto text-sm leading-6 text-[#292929]  md:text-base md:leading-7 lg:absolute lg:w-[37%] bottom-32 left-16 lg:text-xl lg:leading-9 ">
						Determined proportions, clear contours, precise lines and pure
						surfaces are characteristics of Lamborghini’s design reduces to its
						ver essence. This DNA embodies the guidelines that inpire the
						Lamborghini Centro Stile to create cars that are always different
						and increasingly innovative in terms of research and aesthetic
						language, yet all unmistakably Lamborghini.
					</p>
					<div className=" lg:absolute top-28 -right-28">
						<img
							src={designImg}
							alt=""
							className="overflow-hidden md:pb-20 lg:w-[80rem] z-30"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Design;
