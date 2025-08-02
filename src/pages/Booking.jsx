import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <div>
    <section
      id="booking"
      className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-100 flex items-center justify-center px-4 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl bg-white shadow-xl rounded-xl p-8 md:p-12"
      >
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
          Book Your Glow ✨
        </h2>

        <form
          action="https://formsubmit.co/madebybabli@gmail.com"
          method="POST"
          className="space-y-6"
        >
          {/* Redirect to thank you page */}
          <input
            type="hidden"
            name="_next"
            value="https://madebybabli-booknow.netlify.app/thank-you"
          />

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Preferred Date
            </label>
            <input
              type="date"
              name="date"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Service
            </label>
            <select
              name="service"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="">Select a service</option>
              <option value="facial">Relaxing Facial</option>
              <option value="hair">Hair Styling</option>
              <option value="aroma">Aromatherapy</option>
            </select>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-full font-semibold hover:bg-pink-700 transition-all"
          >
            Confirm Booking 💖
          </motion.button>
        </form>
      </motion.div>
    </section>
    <div className="text-center mt-8">
        <Link
          to="/"
          className="inline-block px-6 py-2 text-pink-600 font-semibold border-2 border-pink-500 rounded-full hover:bg-pink-50 transition-all"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
    
  );
};

export default Booking;