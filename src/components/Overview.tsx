import { motion } from "framer-motion";
import SchoolErp from "../assets/ERP-Webpage-Graphic-1.png";

const Overview = () => {
  return (
    <section id="Overview" className="w-full bg-white">
      {/* Section 1: What is ERP */}
      <div className="max-w-7xl mx-auto py-20 px-4 lg:px-20">
        <h1 className="text-4xl font-bold text-blue-950 mb-6">
          What is Enterprise Resource Planning (E.R.P) Software?
        </h1>
        <div className="justify-between md:flex grid">
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-gray-700 text-lg leading-relaxed font-medium max-w-5xl"
          >
            Enterprise Resource Planning (ERP) software is a powerful all-in-one
            system that helps businesses manage their daily operations —
            including sales, inventory, accounting, payroll, human resources,
            and customer relationships — all from a single, connected platform.
            <br />
            <br />
            At{" "}
            <span className="text-blue-950 font-semibold">
              Learnsoft Beliotech Solutions
            </span>
            , our ERP systems bring all your key business functions together in
            one place. With real-time visibility, streamlined workflows, and
            enhanced collaboration across departments, our ERP helps your team
            reduce manual work, make smarter decisions, and operate more
            efficiently. It’s the foundation for modern, scalable business
            growth.
          </motion.p>
          <img src={SchoolErp} alt="" className="mx-auto h-60 md:h-80 pl-5" />
        </div>
      </div>

      {/* Section 2: Why You Need ERP */}
      <div className="max-w-7xl mx-auto py-16 px-4 lg:px-20 bg-gray-50 shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
          Why Your Business Needs ERP
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed font-medium max-w-5xl">
          No more juggling between disconnected systems. With ERP, your team
          works with the same real-time data — reducing errors, saving time, and
          improving accuracy across the board. From sales and finance to HR and
          inventory, you gain a clear and unified view of your business
          performance.
          <br />
          <br />
          ERP empowers your business to automate repetitive tasks, reduce
          operational costs, and keep every department aligned. Whether you're a
          fast-growing startup or an established company, ERP gives you the
          control and flexibility to scale confidently — acting as the command
          center for smarter, more strategic growth.
        </p>
      </div>
    </section>
  );
};

export default Overview;
