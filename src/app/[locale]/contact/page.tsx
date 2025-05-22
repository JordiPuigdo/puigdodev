import ContactForm from "./ContactForm";
import ContactSection from "./ContactSection";
import { MapSection } from "./MapSection";

export default function Contact() {
  return (
    <main className="flex flex-col">
      <MapSection />
      <div className="py-4 bg-primary">
        <ContactSection />
        <ContactForm />
      </div>
    </main>
  );
}
