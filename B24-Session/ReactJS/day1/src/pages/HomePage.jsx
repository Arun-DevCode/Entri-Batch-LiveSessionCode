import Navbar from "../components/Navbar";
import HeroBackground from "../assets/Hero-background.svg";
import HeroSection from "../components/layouts/HeroSection";

function HomePage() {
  return (
    <header className="relative">
      <Navbar />
      {/* <img
        src={HeroBackground}
        alt="hero-background"
        className="w-full opacity-30"
      /> */}
      <HeroSection />
    </header>
  );
}

export default HomePage;
