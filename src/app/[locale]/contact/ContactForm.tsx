"use client";

import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactFormInputs>();

  const t = useTranslations("contact");

  const onSubmit = async (data: ContactFormInputs) => {
    console.log("Sending message...", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl mx-auto flex flex-col gap-6  p-8 "
    >
      <div>
        <input
          id="name"
          {...register("name", { required: true })}
          placeholder={t("name")}
          className="w-full p-2 border rounded-md"
        />
        {errors.name && <p className="text-red-500 text-sm">{t("errors.name")}</p>}
      </div>

      <div>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
          className="w-full p-2 border rounded-md"
          placeholder={t("email")}
        />
        {errors.email && <p className="text-red-500 text-sm">{t("errors.email")}</p>}
      </div>

      <div>
        <textarea
          id="message"
          rows={5}
          {...register("message", { required: true })}
          className="w-full p-2 border rounded-md"
          placeholder={t("message")}
        />
        {errors.message && <p className="text-red-500 text-sm">{t("errors.message")}</p>}
      </div>
      <div className="flex items-center gap-2 justify-center">
        <button
          type="submit"
          className="relative px-12 py-2 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold overflow-hidden group"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            Enviar
          </span>
          <span className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
        </button>
      </div>

      {isSubmitSuccessful && <p className="text-green-600 text-sm mt-2">{t("success")}</p>}
    </form>
  );
};

export default ContactForm;
