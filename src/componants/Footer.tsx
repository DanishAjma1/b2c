import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <p className="mb-2">1234 Software Street</p>
          <p className="mb-2">Tech City, TC 56789</p>
          <p className="mb-2">Email: info@effectivesoft.com</p>
          <p className="mb-2">Phone: +1 (123) 456-7890</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:text-blue-500 transition">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-500 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-blue-500 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <Instagram size={20} />
            </a>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Effectivesoft. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
