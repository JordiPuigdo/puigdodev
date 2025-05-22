import AboutSection from "./AboutSection";
import { TechStack } from "./TechStack";

export default function AboutMe() {
  return (
    <div className="flex flex-col">
      <AboutSection />
      <TechStack />
    </div>
  );
}
