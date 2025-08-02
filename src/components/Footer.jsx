import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-gray-700 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo or Studio Name */}
        <h2 className="text-xl font-bold text-pink-600">GlowSpace Studio ✨</h2>

        {/* Social Links */}
        <div className="flex gap-4 text-pink-600 text-lg">
          <a href="https://instagram.com/madebybabli" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/in/babli-chauhan" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/madebydev-babli" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>

      <p className="text-center text-sm mt-6 text-gray-500">
        © {new Date().getFullYear()} GlowSpace Studio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
