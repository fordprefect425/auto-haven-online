
import { Link } from "react-router-dom";
import { Car, Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-auto-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-auto-red-600" />
              <span className="text-2xl font-bold">AutoHaven</span>
            </div>
            <p className="text-auto-gray-300 mb-4">
              Your trusted destination for quality used cars. We provide comprehensive services from financing to maintenance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-auto-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-auto-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-auto-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-auto-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/cars" className="text-auto-gray-300 hover:text-white transition-colors">Browse Cars</Link></li>
              <li><Link to="/financing" className="text-auto-gray-300 hover:text-white transition-colors">Financing Options</Link></li>
              <li><Link to="/services" className="text-auto-gray-300 hover:text-white transition-colors">Our Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-auto-gray-300 hover:text-white transition-colors">Vehicle Inspection</a></li>
              <li><a href="#" className="text-auto-gray-300 hover:text-white transition-colors">Financing Calculator</a></li>
              <li><a href="#" className="text-auto-gray-300 hover:text-white transition-colors">Maintenance Plans</a></li>
              <li><a href="#" className="text-auto-gray-300 hover:text-white transition-colors">Extended Warranty</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-auto-red-600" />
                <span className="text-auto-gray-300">info@autohaven.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-auto-red-600" />
                <span className="text-auto-gray-300">(555) 123-4567</span>
              </li>
              <li className="text-auto-gray-300">
                Mon - Fri: 9:00 AM - 8:00 PM<br />
                Sat - Sun: 10:00 AM - 6:00 PM
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-auto-gray-700 mt-12 pt-8 text-center text-auto-gray-400">
          <p>&copy; {new Date().getFullYear()} AutoHaven Online. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
