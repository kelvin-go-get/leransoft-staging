import { motion } from "framer-motion";
import Learnsoft from "../assets/learnsoft.png";

const Hero = () => {
  return (
    <motion.section
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      className="relative w-full h-full md:h-[70vh] hero-bg px-5 items-center justify-center"
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 h-full md:px-20 grid md:flex text-white justify-between py-16 lg:px-20 px-4">
        <div className="pt-5 text-center md:text-start">
          <h1 className="text-4xl md:text-7xl text-start font-semibold mb-4">
            Game-Changing
            <br />
            ERP <br />
            <span className="text-orange-500">Solutions</span>
          </h1>
          <motion.p
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            className="font-light md:text-lg mb-6 text-start"
          >
            Through our solutions, we empower organizations to realize
            <br />a Return On Investment (ROI) and make informed decisions.
          </motion.p>
          <motion.a
            whileTap={{ scale: 0.8 }}
            href="/courses"
            className="inline-block bg-orange-500 text-white px-6 py-3 mt-5 rounded hover:bg-orange-600 w-fit"
          >
            Explore Our Products
          </motion.a>
        </div>

        <motion.div
          animate={{
            rotate: [0, 2, -2, 0],
            boxShadow: [
              "0px 0px 0px rgba(0,0,0,0)",
              "0px 0px 30px rgba(255,165,0,0.3)",
              "0px 0px 0px rgba(0,0,0,0)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={Learnsoft}
            alt="Learnsoft laptop"
            className="hidden md:block h-100 rounded-2xl"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
