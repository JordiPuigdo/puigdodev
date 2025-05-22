export const MapSection = () => {
  return (
    <div className="w-full h-96 rounded-xl shadow-lg border-t-2">
      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.018641227166!2d2.1687085157248166!3d41.387015279263065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f2a3d0caa3%3A0x123456789abcdef0!2sBarcelona!5e0!3m2!1sca!2ses!4v1600000000000!5m2!1sca!2ses"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
