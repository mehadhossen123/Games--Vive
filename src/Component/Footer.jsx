import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Services */}
        <div>
          <h6 className="text-lg font-bold mb-4 text-indigo-400">Services</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-indigo-500 transition">
                Game Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500 transition">
                Design & UI
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500 transition">
                Marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500 transition">
                Esports Management
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-lg font-bold mb-4 text-indigo-400">Company</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-indigo-500 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500 transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500 transition">
                Press
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="text-lg font-bold mb-4 text-indigo-400">Legal</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-indigo-500 transition">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500 transition">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h6 className="text-lg font-bold mb-4 text-indigo-400">Follow Us</h6>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-indigo-500 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-indigo-500 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-indigo-500 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-indigo-500 transition">
              <FaDiscord size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} GameVerse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
