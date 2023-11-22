import womenImage from "src/assets/image/women.png";
import white from "src/assets/image/white.png";
import yellow from "src/assets/image/yellow.png";
import red from "src/assets/image/red.png";
import { useSpring, animated } from "@react-spring/web";

function BannerSection() {

	const springs = useSpring({
		from: {
			translateY: 20,
			opacity: 0,
		},
		to: {
			translateY: 0,
			opacity: 1,
		}
	});
	const imageSpring = useSpring({
		from: {
			scale: 0,
		},
		to: {
			scale: 1
		}
	});

	return (
		<div className="flex items-center justify-between">
			{/* content */}
			<div className="">
				<div className="flex flex-col text-[4.875rem] leading-[6.0625rem] border-b border-b-black pb-10">
					<div className="">
						<animated.div style={springs} className="duration-300 ease-linear">
							UNLIMITED
						</animated.div>
						<animated.div style={springs} className="duration-300 ease-linear">
							PRETENTIOUS
						</animated.div>
					</div>
					<div className="flex items-center gap-x-8">
						<div className="flex items-center">
							<div className="w-[4.245rem] shrink-0">
								<div className="w-[5.125rem] aspect-square rounded-full border-[4px] border-white">
									<img src={white} alt="" className="w-full h-full" />
								</div>
							</div>
							<div className="w-[4.245rem] shrink-0">
								<div className="w-[5.125rem] aspect-square rounded-full border-[4px] border-white">
									<img src={red} alt="" className="w-full h-full" />
								</div>
							</div>
							<div className="w-[4.245rem] shrink-0">
								<div className="w-[5.125rem] aspect-square rounded-full border-[4px] border-white">
									<img src={yellow} alt="" className="w-full h-full" />
								</div>
							</div>
						</div>
						<animated.div style={springs} className="duration-300 ease-linear">
							IDEAS
						</animated.div>
					</div>
				</div>
				<div className="flex justify-between items-start pt-5">
					<span>OUR SOLUTIONS</span>
					<span>
						WE PROVIDE THE FULL <br /> FUNNEL APPROACH
					</span>
				</div>
			</div>
			{/* images */}
			<animated.div
				style={{
					transformOrigin: "bottom",
					...imageSpring,
				}}
				className="w-[39.08856rem] h-[30.125rem] relative transition-transform ease-linear"
			>
				{/* container */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-full h-full absolute top-0 left-0"
					viewBox="0 0 626 482"
					fill="none"
				>
					<path
						d="M20.917 482H605.417C616.479 482 625.44 473.02 625.417 461.958L624.587 61.9585C624.564 50.929 615.617 42 604.587 42H543.46C532.415 42 523.461 33.0466 523.46 22.0015L523.46 19.9985C523.459 8.9534 514.505 0 503.46 0H20C8.9381 0 -0.022906 8.97961 4.39844e-05 20.0415L0.917056 462.042C0.939939 473.071 9.88751 482 20.917 482Z"
						fill="#B4A0D1"
					/>
				</svg>
				{/* desc */}
				<p className="text-[1.125rem] font-semibold absolute top-0 left-0 p-[2.13rem]">
					YOUR <br /> BUSINESS <br /> BOOST
				</p>
				{/* women */}
				<img
					src={womenImage}
					alt="women face"
					className="w-full h-full object-contain absolute top-0 left-0"
				/>
				{/* circels */}
				<div className="absolute top-0 right-0 py-4 px-10 flex items-center gap-x-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="10"
						height="10"
						viewBox="0 0 10 10"
						fill="none"
					>
						<circle cx="5" cy="5" r="5" fill="black" />
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="10"
						height="10"
						viewBox="0 0 10 10"
						fill="none"
					>
						<circle cx="5" cy="5" r="4.5" stroke="black" />
					</svg>
				</div>
				{/* actions */}
				<div className="px-8 py-4 absolute bottom-0 left-0 w-full group">
					<button className="active:scale-95 transition-transform w-full border border-black group-hover:bg-white rounded-[2.5rem] flex items-center justify-between p-2 pl-10">
						<span>Book Demo Call</span>
						<div className="">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="48"
								viewBox="0 0 48 48"
								fill="none"
							>
								<rect
									x="0.5"
									y="0.5"
									width="47"
									height="47"
									rx="23.5"
									fill="white"
								/>
								<rect
									x="0.5"
									y="0.5"
									width="47"
									height="47"
									rx="23.5"
									stroke="black"
								/>
								<path
									d="M31.2071 24.7071C31.5976 24.3166 31.5976 23.6834 31.2071 23.2929L24.8431 16.9289C24.4526 16.5384 23.8195 16.5384 23.4289 16.9289C23.0384 17.3195 23.0384 17.9526 23.4289 18.3431L29.0858 24L23.4289 29.6569C23.0384 30.0474 23.0384 30.6805 23.4289 31.0711C23.8195 31.4616 24.4526 31.4616 24.8431 31.0711L31.2071 24.7071ZM18.5 25H30.5V23H18.5V25Z"
									fill="black"
								/>
							</svg>
						</div>
					</button>
				</div>
			</animated.div>
		</div>
	);
}

export default BannerSection;
