import HeroSection from "./HeroSection";
import IntroductionSection from "./IntroductionSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <IntroductionSection />
    </main>
  );
}
