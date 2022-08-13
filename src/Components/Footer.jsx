import React from 'react';
import logo from '../Assets/logo.png';

const Footer = () => {
	return (
		<div>
			<div className="w-full h-56 bg-black py-4 overflow-hidden lg:h-64 lg:py-6">
				<div className="flex flex-col gap-4 justify-center items-center w-full mx-auto h-full lg:pb-10">
					<img src={logo} alt="" className="w-12" />
					<h1 className="font-cinzel text-white text-xl lg:text-3xl overflow-hidden lg:pb-4">
						Lamborghini
					</h1>
					<div className="flex gap-10">
						<a
							href="https://www.facebook.com/Lamborghini"
							target="_blank"
							rel="noopener noreferrer"
							className="font-roboto text-gray-300 text-sm hover:text-white transition-all duration-300 uppercase"
						>
							Facebook
						</a>
						<a
							href="https://twitter.com/Lamborghini"
							target="_blank"
							rel="noopener noreferrer"
							className="font-roboto text-gray-300 text-sm hover:text-white transition-all duration-300 uppercase"
						>
							twitter
						</a>
						<a
							href="https://www.instagram.com/lamborghini/"
							target="_blank"
							rel="noopener noreferrer"
							className="font-roboto text-gray-300 text-sm hover:text-white transition-all duration-300 uppercase"
						>
							instagram
						</a>
					</div>
				</div>
				<p className="text-center text-gray-500 text-[10px] font-roboto uppercase">
					project by Utba Zafar
				</p>
			</div>
		</div>
	);
};

export default Footer;
