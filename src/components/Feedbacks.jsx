import React from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import simplilearn from '../assets/my_icons/simplilearn.png';

const FeedbackCard = ({
  index,
  title,
  image,
  testimonial,
}) => (
  <motion.a
    href={testimonial}
    target='_blank'
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black p-10 rounded-3xl xs:w-[290px] w-[350px] mt-8'
  >
    <img src={image} alt="image" className="rounded-2xl h-52 w-96 " />


    <div className='mt-1'>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {title}
          </p>
        </div>

        <img
          src={simplilearn}
          alt='img'
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.a>
);

const Feedbacks = () => {
  return (
    <div className={`mt-2 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-[#282C34] rounded-2xl ${styles.padding} min-h-[100px]`}
      >

        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What Courses</p>
          <h2 className={styles.sectionHeadText}>Certificates.</h2>
        </motion.div>

        <div className={`mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-evenly`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}

      </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");