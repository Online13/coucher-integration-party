import { NavLink } from "react-router-dom";
import logo from "src/assets/image/logo.png";

function Header() {
	return (
		<header className="w-full flex items-center justify-between pb-5 border-b border-b-black">
			<div className="w-full flex items-center gap-x-56">
				<div className="">
					<img
						src={logo}
						alt="main log coucher"
						className="w-[8.625rem] h-auto"
					/>
				</div>
				<nav>
					<ul className="flex items-center gap-x-10">
						<li className="hover:underline">
							<NavLink to="#">SERVICES</NavLink>
						</li>
						<li className="hover:underline">
							<NavLink to="#">ABOUT US</NavLink>
						</li>
						<li className="hover:underline">
							<NavLink to="#">CASES</NavLink>
						</li>
					</ul>
				</nav>
			</div>
			<div className="flex items-center gap-x-6">
				<NavLink to="#" className="whitespace-nowrap hover:underline">
					SIGN UP
				</NavLink>
				<button className="active:scale-95 transition-transform">
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
							d="M27.7071 24.7071C28.0976 24.3166 28.0976 23.6834 27.7071 23.2929L21.3431 16.9289C20.9526 16.5384 20.3195 16.5384 19.9289 16.9289C19.5384 17.3195 19.5384 17.9526 19.9289 18.3431L25.5858 24L19.9289 29.6569C19.5384 30.0474 19.5384 30.6805 19.9289 31.0711C20.3195 31.4616 20.9526 31.4616 21.3431 31.0711L27.7071 24.7071ZM15 25H27V23H15V25Z"
							fill="black"
						/>
						<path
							d="M27.5 15H32C33.1046 15 34 15.8954 34 17V31C34 32.1046 33.1046 33 32 33H27.5"
							stroke="black"
							stroke-width="2"
						/>
					</svg>
				</button>
			</div>
		</header>
	);
}


export default Header;