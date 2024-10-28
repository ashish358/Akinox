import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'; // Importing icons

// Update the paymentIcons array with actual paths to the logos
const paymentIcons = [
    "path/to/visa.png",     // Visa logo
    "path/to/paytm.png",    // Paytm logo
    "path/to/gpay.png",     // Google Pay logo
    "path/to/rupay.png",    // RuPay logo
];

export function Footer() {
    return (
        <footer className="bg-black text-white py-10 font-sans">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between mb-6">
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-4xl font-bold mb-2 font-serif">Akinox</h1>
                        <div>
                            <h2 className="font-semibold text-lg">Customer Service</h2>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><a href="/contact" className="hover:underline hover:text-gray-400 font-serif">Contact Us</a></li>
                                <li><a href="/about" className="hover:underline hover:text-gray-400 font-serif">About Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-semibold text-lg font-serif">Follow Us</h2>
                            <div className="flex space-x-4 mt-2">
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <FaInstagram className="text-2xl transition-transform transform hover:scale-110" />
                                </a>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <FaTwitter className="text-2xl transition-transform transform hover:scale-110" />
                                </a>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <FaFacebook className="text-2xl transition-transform transform hover:scale-110" />
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <FaLinkedin className="text-2xl transition-transform transform hover:scale-110" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <h2 className="font-semibold text-lg font-serif">Payment Method</h2>
                        <div className="flex justify-center space-x-4 mt-2">
                            {paymentIcons.map((icon, index) => (
                                <img 
                                    key={index} 
                                    src={icon} 
                                    alt="Payment Method" 
                                    className="w-16 h-16 object-contain transition-transform transform hover:scale-105"
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-center text-sm mt-4 border-t border-gray-600 pt-4">
                    <p>&copy; {new Date().getFullYear()} Brand Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
