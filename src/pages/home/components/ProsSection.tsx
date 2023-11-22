
import { useSpring, animated } from '@react-spring/web';

function ProsSection() {

	const springs = useSpring({
		from: { scale: 0 },
		to: { scale: 1 }
	})

	return (
		<div className="w-full flex items-center justify-between mt-[5.07rem]">
			<div className="flex h-[19.37431rem] flex-col justify-between">
				<div className="flex items-center gap-x-[1.38rem]">
					<button className='active:scale-95 transition-transform'>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="54"
							height="54"
							viewBox="0 0 54 54"
							fill="none"
						>
							<rect width="54" height="54" rx="27" fill="black" />
							<path d="M34 27L21 35V19L34 27Z" fill="white" />
						</svg>
					</button>
					<span className="text-base">
						Let’s See <br /> How We Did It
					</span>
				</div>
				<div className="inline-flex flex-col gap-y-[0.88rem]">
					<button className="active:scale-95 transition-transform px-6 py-3 border border-black rounded-[2.5rem]">
						WEB ANALYTICS
					</button>
					<button className="active:scale-95 transition-transform px-6 py-3 border border-black rounded-[2.5rem]">
						EMAIL MARKETING
					</button>
					<button className="active:scale-95 transition-transform px-6 py-3 border border-black rounded-[2.5rem]">
						SEO 2.0
					</button>
				</div>
			</div>
			<div className="flex items-center gap-x-1">
				{/* #1 */}
				<animated.div
					style={springs}
					className="w-[19.37431rem] aspect-square relative transform transition-all duration-150 ease-out scale-0"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="311"
						height="311"
						viewBox="0 0 311 311"
						fill="none"
					>
						<path
							d="M20.1783 311H290.023C301.068 311 310.023 302.046 310.023 291V20C310.023 8.9543 301.068 0 290.023 0H217.307C212.002 0 206.915 2.10713 203.165 5.85786L200.38 8.64214C196.63 12.3929 191.543 14.5 186.238 14.5H20.0338C8.98372 14.5 0.0275916 23.4612 0.0338167 34.5113L0.178316 291.011C0.184536 302.053 9.13702 311 20.1783 311Z"
							fill="#FD5E09"
						/>
					</svg>
					<div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between py-12 px-[2.13rem]">
						<p className="text-[1.125rem] font-semibold">
							UNIQUE <br /> BUSINESS SOLUTIONS
						</p>
						<div className="">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="66"
								height="60"
								viewBox="0 0 66 60"
								fill="none"
							>
								<path
									d="M25.0563 16.076C25.0143 11.658 28.5618 8.04236 32.9799 8.00038C37.398 7.95839 41.0136 11.5059 41.0556 15.924C41.0836 18.8719 39.5135 21.4626 37.153 22.8728L41.4182 29.6437C46.0454 26.8016 49.1106 21.6736 49.0552 15.848C48.9712 7.01182 41.74 -0.0832298 32.9039 0.000737668C24.0677 0.0847051 16.9727 7.3159 17.0566 16.1521C17.1104 21.8056 20.09 26.7464 24.5438 29.5501L33.3638 23.9942C33.2868 23.9971 33.2095 23.9989 33.1319 23.9997C28.7139 24.0416 25.0983 20.4941 25.0563 16.076Z"
									fill="black"
								/>
								<path
									d="M24.8755 43.5101C24.9485 47.9277 21.4265 51.5682 17.0088 51.6412C12.5911 51.7142 8.95069 48.1922 8.87766 43.7745C8.82894 40.8269 10.3808 38.2252 12.7313 36.7985L8.41866 30.0577C3.81149 32.9323 0.782466 38.0817 0.878757 43.9068C1.02481 52.7421 8.30567 59.7862 17.141 59.6401C25.9764 59.4941 33.0204 52.2132 32.8744 43.3779C32.7809 37.7248 29.7667 32.8051 25.2933 30.0327L16.5125 35.6505C16.5895 35.6471 16.6668 35.6447 16.7443 35.6434C21.162 35.5704 24.8025 39.0924 24.8755 43.5101Z"
									fill="black"
								/>
								<path
									d="M57.2686 42.8529C57.3416 47.2706 53.8196 50.911 49.4019 50.984C44.9843 51.0571 41.3438 47.535 41.2708 43.1174C41.2221 40.1697 42.7739 37.5681 45.1244 36.1413L40.8118 29.4005C36.2046 32.2751 33.1756 37.4245 33.2719 43.2496C33.4179 52.0849 40.6988 59.129 49.5341 58.983C58.3695 58.8369 65.4136 51.556 65.2675 42.7207C65.1741 37.0676 62.1598 32.1479 57.6865 29.3755L48.9057 34.9934C48.9827 34.9899 49.0599 34.9875 49.1375 34.9862C53.5551 34.9132 57.1956 38.4352 57.2686 42.8529Z"
									fill="black"
								/>
							</svg>
						</div>
					</div>
				</animated.div>
				{/* #2 */}
				<animated.div
					style={springs}
					className="w-[19.37431rem] aspect-square relative transform transition-all duration-150 ease-out scale-0"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="311"
						height="311"
						viewBox="0 0 311 311"
						fill="none"
					>
						<path
							d="M20.1783 311H290.023C301.068 311 310.023 302.046 310.023 291V20C310.023 8.9543 301.068 0 290.023 0H217.307C212.002 0 206.915 2.10713 203.165 5.85786L200.38 8.64214C196.63 12.3929 191.543 14.5 186.238 14.5H20.0338C8.98372 14.5 0.0275916 23.4612 0.0338167 34.5113L0.178316 291.011C0.184536 302.053 9.13702 311 20.1783 311Z"
							fill="#E0E0E0"
						/>
					</svg>
					<div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between pt-[2.63rem] pb-7 px-[2.13rem]">
						<div className="flex items-center justify-between">
							{/* circles */}
							<div className="flex items-center gap-x-1">
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
							{/* arrow */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="27"
								height="27"
								viewBox="0 0 27 27"
								fill="none"
							>
								<path
									d="M26.6612 2.00002C26.6612 0.895455 25.7658 2.42739e-05 24.6612 2.37682e-05L6.66123 2.40211e-05C5.55666 2.46954e-05 4.66123 0.895454 4.66123 2.00002C4.66123 3.10459 5.55666 4.00002 6.66123 4.00002L22.6612 4.00002L22.6612 20C22.6612 21.1046 23.5567 22 24.6612 22C25.7658 22 26.6612 21.1046 26.6612 20L26.6612 2.00002ZM3.44803 26.0417L26.0754 3.41424L23.247 0.585811L0.6196 23.2132L3.44803 26.0417Z"
									fill="black"
								/>
							</svg>
						</div>
						<p className="text-[2rem] font-bold">
							OUR CASE <br /> STUDIES
						</p>
					</div>
				</animated.div>
				{/* #3 */}
				<animated.div
					style={springs}
					className="w-[19.37431rem] aspect-square relative transform transition-all duration-150 ease-out scale-0"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="311"
						height="311"
						viewBox="0 0 311 311"
						fill="none"
					>
						<path
							d="M20.1783 311H290.023C301.068 311 310.023 302.046 310.023 291V20C310.023 8.9543 301.068 0 290.023 0H217.307C212.002 0 206.915 2.10713 203.165 5.85786L200.38 8.64214C196.63 12.3929 191.543 14.5 186.238 14.5H20.0338C8.98372 14.5 0.0275916 23.4612 0.0338167 34.5113L0.178316 291.011C0.184536 302.053 9.13702 311 20.1783 311Z"
							fill="#FDC959"
						/>
					</svg>
					<div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between pt-[2.63rem] pb-7 px-[2.13rem]">
						<p className="text-[1.125rem] font-semibold">
							SUCCESSFUL <br /> PROJECTS
						</p>
						<span className="text-[4.875rem] font-bold leading-0 relative top-4">
							700
							<span className="text-[3.625rem] font-bold relative bottom-10">
								+
							</span>
						</span>
					</div>
				</animated.div>
			</div>
		</div>
	);
}

export default ProsSection;
