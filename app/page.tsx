import HeroSection from "./_components/HeroSection";
import ShopSection from "./_components/ShopSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ShopSection />
    </div>
  );
}
