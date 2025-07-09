import { motion } from "framer-motion";
import { FaMobileAlt, FaLaptopCode, FaCloud, FaCogs } from "react-icons/fa";

const services = [
  {
    title: "Mobile App Development",
    icon: <FaMobileAlt className="text-4xl text-orange-500 animate-bounce" />,
    description:
      "Custom mobile applications tailored for both Android and iOS platforms.",
  },
  {
    title: "Web App Development",
    icon: (
      <FaLaptopCode className="text-4xl text-orange-500 animate-spin-slow" />
    ),
    description:
      "Responsive and scalable web platforms using the latest tech stacks.",
  },
  {
    title: "Cloud Services",
    icon: <FaCloud className="text-4xl text-orange-500 animate-pulse" />,
    description:
      "Secure cloud infrastructure setup and management for modern scalability.",
  },
  {
    title: "IT Consulting",
    icon: <FaCogs className="text-4xl text-orange-500 animate-wiggle" />,
    description:
      "Professional advisory for transforming and optimizing your tech operations.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-gray-50 to-white py-20 px-5 lg:px-20"
    >
      <h2 className="text-4xl font-bold text-center text-blue-950 mb-16">
        Our Services
      </h2>
      <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className="bg-white rounded-xl p-6 w-72 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-lg font-bold text-blue-900 mb-2 text-center">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm text-center">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
