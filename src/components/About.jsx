import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc/index';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-[300px]' options={{ max: 45, scale: 1, speed: 450 }}>
      <motion.div 
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      >
        <div className='bg-[#282C34] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-[#dfd9ff] text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn('', '', 0.1, 1)} 
        className='mt-4 text-[#dfd9ff] text-[17px] max-w-3xl leading-[30px]'
      >
        As a React.js front-end developer, I create dynamic web experiences using GSAP, Three.js, Tailwind CSS, and custom CSS. I excel at building engaging interfaces and responsive designs while collaborating with cross-functional teams to ensure seamless integration and performance-focused, high-quality animations that elevate user experiences.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, "about");