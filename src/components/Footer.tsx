const Footer = () => {
  return (
    <div className="bg-blue-950 p-6 text-white placeholder:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h2>
        <form className="grid">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="p-2 border border-orange-500 rounded w-80 bg-white md:w-100 mb-3 text-black"
          />
          <button
            type="submit"
            className="w-fit bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
          >
            Subscribe
          </button>
        </form>
      </div>
      <hr className="max-w-7xl mx-auto my-5 text-gray-400" />
      <footer className="justify-between flex mx-auto max-w-6xl">
        <p className="text-[8px] md:text-sm font-extralight text-gray-400">
          &copy; Learnsoft Beliotech Solutions Limited, All Right Reserved. 2025
        </p>
        <a href="#" className="text-gray-400">
          FAQ's
        </a>
      </footer>
    </div>
  );
};

export default Footer;
