"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Testimonial = {
  name: string;
  title: string;
  comment: string;
  avatarUrl: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Alice Johnson",
    title: "CEO at BrightTech",
    comment:
      "Working with you was an outstanding experience. Your attention to detail and technical skills are top-notch!",
    avatarUrl: "/avatars/man.svg",
  },
  {
    name: "Carlos Rivera",
    title: "Product Manager at Nova",
    comment:
      "You delivered high-quality code and collaborated effectively with our team. We’re extremely satisfied.",
    avatarUrl: "/avatars/man.svg",
  },
  {
    name: "Maria López",
    title: "Founder of Designify",
    comment:
      "Fantastic work! Creative, fast, and reliable. I highly recommend you for any serious project.",
    avatarUrl: "/avatars/man.svg",
  },
];

const Testimonials: FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <h2 className="text-3xl font-heading text-center text-white mb-12">What People Say</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={testimonial.avatarUrl}
                alt={testimonial.name}
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic mb-4">“{testimonial.comment}”</p>
            <h4 className="text-lg font-semibold text-primary">{testimonial.name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
