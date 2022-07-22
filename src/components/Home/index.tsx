import { motion, Variants } from "framer-motion";

const Home = () => {
  const homeVarients: Variants = {
    offscreen: {
      y: 500,
    },
    onscreen: {
      y: 0,
      paddingTop: '10%',
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <div>
      <motion.div
        className="card-container"
        initial="onscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className="card" variants={homeVarients}>
          Personal section
        </motion.div>
      </motion.div>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className="card" variants={homeVarients} style={{backgroundColor: 'red'}}>
          Personal section
        </motion.div>
      </motion.div>

      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className="card" variants={homeVarients}>
          Personal section
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
