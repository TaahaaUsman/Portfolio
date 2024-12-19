import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FaLinkedin, FaGithub, FaFacebook, FaGoogle } from "react-icons/fa";

// template_np12n44
// service_r6rb52r
// fjxUMFCneQFAfhq-h

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_r6rb52r",
        "template_np12n44",
        {
          from_name: form.name,
          to_name: "Taahaa Usman",
          from_email: form.email,
          to_email: "taha.usman.ccl@gmail.com",
          message: form.message,
        },
        "fjxUMFCneQFAfhq-h"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black bg-opacity-90 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-[#282C34] py-4 px-6 placeholder:text-[#dfd9ff] text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-[#282C34] py-4 px-6 placeholder:text-[#dfd9ff] text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="what's you want to say?"
                className="bg-[#282C34] py-4 px-6 placeholder:text-[#dfd9ff] text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-[#282C34] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[450px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
      <div className={styles.sectionSubText}>
        <div className="my-12 mb-12 sm:mb-20 h-[1px] w-full bg-secondary"></div>
        <div className="flex justify-between items-center text-[10px] sm:text-[14px] md:text-[18px]">
          <div>Copyright©. All rights reserved.</div>
          <div className="flex gap-8 cursor-pointer">
            <a href="https://www.linkedin.com/in/taahaa-usman/" target="_blank">
              <div className="w-8 h-8 md:w-12 md:h-12 border border-secondary hover:border-white transition-all rounded-full flex items-center justify-center">
                <FaLinkedin
                  color={"#aaa6c3"}
                  className="w-4 h-4 md:w-6 md:h-6"
                />
              </div>
            </a>
            <a href="https://github.com/TaahaaUsman" target="_blank">
              <div className="w-8 h-8 md:w-12 md:h-12 border border-secondary hover:border-white rounded-full flex items-center justify-center">
                <FaGithub color={"#aaa6c3"} className="w-4 h-4 md:w-6 md:h-6" />
              </div>
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=100073340894154"
              target="_blank"
            >
              <div className="w-8 h-8 md:w-12 md:h-12 border border-secondary hover:border-white rounded-full flex items-center justify-center">
                <FaFacebook
                  color={"#aaa6c3"}
                  className="w-4 h-4 md:w-6 md:h-6"
                />
              </div>
            </a>
            <a
              href="https://console.cloud.google.com/projectselector2/apis/dashboard?pli=1&inv=1&invt=AbkeKA&supportedpurview=project"
              target="_blank"
            >
              <div className="w-8 h-8 md:w-12 md:h-12 border border-secondary hover:border-white rounded-full flex items-center justify-center">
                <FaGoogle color={"#aaa6c3"} className="w-6 h-6" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
