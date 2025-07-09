import { motion } from "framer-motion";

const products = [
  {
    title: "ERP System",
    description:
      "A powerful all-in-one platform to manage sales, inventory, payroll, HR, and finance.",
    image:
      "https://images.ctfassets.net/lzny33ho1g45/1FzzuoyZ554G7ApEDxJZJJ/e8f00ca2c12848541ae01a2dee00f003/0aca5b23-e069-40b7-abce-a0fc846cd857.png",
  },
  {
    title: "School Management System",
    description:
      "Modernize school operations with digital attendance, grading, timetabling, and more.",
    image:
      "https://i0.wp.com/inceptor.co.ke/wp-content/uploads/2019/09/school-management-system-in-Kenya-Inceptor.png?ssl=1",
  },
  {
    title: "Healthcare Software",
    description:
      "Manage patient records, appointments, and billing with ease and security.",
    image:
      "https://images.ctfassets.net/lzny33ho1g45/1FzzuoyZ554G7ApEDxJZJJ/e8f00ca2c12848541ae01a2dee00f003/0aca5b23-e069-40b7-abce-a0fc846cd857.png",
  },
  {
    title: "HR & Payroll System",
    description:
      "Streamline your human resource operations including payroll and performance tracking.",
    image:
      "https://uk.adp.com/-/media/adpuk/redesign2019/images/what-we-offer/products/ihcm/new-ihcm2/ihcm2-corehr.png?rev=2d7b935fcbf8479e94c88ac082bb83b4&la=en&h=348&w=586&hash=2E478FDC38FADA316F7CA1ADA3C9E412",
  },
];

const Products = () => {
  return (
    <section id="products" className="bg-white py-20 px-5 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-blue-950 mb-16">
        Our Products
      </h2>
      <div className="flex flex-col gap-16 max-w-6xl mx-auto">
        {products.map((product, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-64 w-full md:w-1/2 object-cover rounded-xl shadow-md"
            />
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                {product.title}
              </h3>
              <p className="text-gray-700 mb-6">{product.description}</p>
              <a
                href="#"
                className="inline-block bg-orange-500 text-white py-2 px-5 rounded-lg hover:bg-orange-600 transition"
              >
                Request Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
