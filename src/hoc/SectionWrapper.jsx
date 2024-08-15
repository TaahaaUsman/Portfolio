import { motion } from "framer-motion";
import { styles } from '../style';
import { staggerContainer } from '../utils/motion';

function SectionWrapper(Component, idName) {
  function HOC() {
    return (
      <motion.section
        id={idName}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding}`}
      >
        <Component />
      </motion.section>
    );
  }

  return HOC;
}

export default SectionWrapper;
