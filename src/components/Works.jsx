import { Tilt } from "react-tilt"
import { motion } from "framer-motion";
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

import { github } from "../assets";


const ProjectCard = ({name, description, tags, image, source_code_link, index}) => {
  return (
    <Tilt className='xs:w-[300px] w-[360px]' options={{ max: 45, scale: 1, speed: 450 }}>
    <motion.div 
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      variants={fadeIn('up', 'spring', 0.5 * index, 0.75)}
    >
      {/* Image code of card */}
      <div className='bg-[#282C34] rounded-2xl p-5 w-full'>
        <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
        
        {/* Code of Gihub icon */}
        <div className="absolute inset-y-4 inset-x-[280px] m-3 card-img_hover ">
          <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer" onClick={() => 
            window.open(source_code_link, '_blank')
          }>
          <img src={github} alt='github' className="w-1/2 h-1/2 object-contain"/>
          </div>
        </div>

        {/* Card data Description and name */}
        <div className="mt-5">
          <h3 className="text-white text-bold text-[24px]">{name}</h3>
          <p className="text-[#dfd9ff] text-[14px]">{description}</p>
        </div>
        {/* code of hashtags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => {
            return (
            <p className={`text-[14px] ${tag.color}`}  key={tag.name}>#{tag.name}</p>
          )})}
        </div>
      </div>
    </motion.div>
  </Tilt>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 text-[#dfd9ff] text-[17px] max-w-3xl leading-[30px]' >
      The following projects are a small part of my skills and experiences through real examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Works, '')