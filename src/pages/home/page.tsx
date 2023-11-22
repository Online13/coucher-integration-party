import Header from "src/components/organisms/Header";
import BannerSection from "./components/BannerSection";
import ProsSection from "./components/ProsSection";

function HomePage() {
	return (
		<div className="w-full h-full px-16 pt-8">
			<Header />
			<div className="pt-14 pb-11">
				{/* banner */}
				<BannerSection />
				{/*  banner 2 */}
				<ProsSection />
			</div>
		</div>
	);
}

export default HomePage;
