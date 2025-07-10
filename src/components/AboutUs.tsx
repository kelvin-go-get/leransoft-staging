import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="Aboutus" className="bg-white py-20 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-blue-950">Who We Are</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Learnsoft Beliotech Solutions is a forward-thinking tech company
            revolutionizing how businesses operate through innovative digital
            solutions.
          </p>
        </motion.div>

        {/* Mission + Vision */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-20">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-orange-50 p-6 rounded-lg shadow"
          >
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To empower organizations of all sizes by delivering cutting-edge,
              user-friendly digital products that streamline operations and
              accelerate growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-50 p-6 rounded-lg shadow"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To become Africa’s leading software innovation hub by building
              scalable and impactful digital ecosystems that shape the future.
            </p>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { title: "10+", subtitle: "Years of Experience" },
            { title: "500+", subtitle: "Clients Served" },
            { title: "20+", subtitle: "Enterprise Solutions" },
            { title: "100%", subtitle: "Customer Satisfaction" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition"
            >
              <h4 className="text-3xl font-bold text-blue-950">{item.title}</h4>
              <p className="text-gray-600 mt-2">{item.subtitle}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
