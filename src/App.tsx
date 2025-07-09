import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Services from "./components/Services";

function App() {
  const phoneNumber = "254706384510";
  const message = "Hello! I'm interested in your services.";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <Header />
      <Hero />
      <Overview />
      <AboutUs />
      <Products />
      <Services />
      {/* WhatsApp floating button */}
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-50 bg-orange-500 text-white rounded-full p-4 shadow-lg hover:bg-orange-600 transition animate-pulse"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 md:w-8 md:h-8"
        >
          <path d="M12.04 2.01A10 10 0 0 0 2 12.06..." />
        </svg>
      </a>

      <Footer />
    </>
  );
}

export default App;
