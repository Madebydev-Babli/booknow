import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Salon from "../assets/salon.jpg";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      {/* HERO / HOME */}
      <section id="home">
        <div className="min-h-screen bg-gradient-to-br from-[#ffe4f0] via-white to-[#e0d4ff] flex items-center justify-center px-4">
          <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-fuchsia-500 to-violet-600">
                Glam Up with GlowSpace Studio
              </h1>

              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Your one-stop destination for beauty & wellness. Book effortlessly, feel fabulous.
              </p>

              <Link to="/booking">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-3 rounded-full shadow-lg font-semibold hover:shadow-xl transition-all"
                >
                  Book Now ✨
                </motion.button>
              </Link>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="flex justify-center"
            >
              <img
                src={Salon}
                alt="GlowSpace Hero"
                className="w-full h-auto max-w-[300px] sm:max-w-[400px] md:max-w-md rounded-xl shadow-lg object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <Services />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Home;