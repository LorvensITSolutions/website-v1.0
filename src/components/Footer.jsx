import React from "react";
import {
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-[#FFF3DC] to-[#FFEACC] text-gray-800 pt-12 pb-6 px-4 md:px-12 border-t border-orange-200"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-orange-600 mb-2 tracking-wide">LORVENS</h2>
          <p className="text-sm text-gray-700 mb-4">
            Crafting innovative tech solutions tailored to your business goals.
          </p>
          <div className="flex gap-4 mt-2">
            {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-orange-600 hover:text-orange-700 transition"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-orange-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-600 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-orange-600 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-600 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/services" className="hover:text-orange-600 transition">
                Web Development
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-orange-600 transition">
                Mobile Apps
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-orange-600 transition">
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-orange-600 transition">
                Cloud Deployment
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-orange-600" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-orange-600" /> info@lorvens.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-orange-600 mt-[2px]" />
              <span>
                Hyderabad, Telangana
                <br />
                India - 500081
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-orange-200 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} LORVENS. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
