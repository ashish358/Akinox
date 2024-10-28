import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export function Navbar() {
    return (
        <nav className="bg-white">
            <div className="shadow-md container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Left Side: Logo and Brand Name */}
                <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 flex justify-center items-center rounded-lg bg-[url('C:\Users\Ashish\Desktop\Akinox\frontend\src\assets\navlogo.jpg')] bg-cover bg-center p-4"> {/* Increased padding */}
                    </div>
                    <span className="text-3xl font-semibold text-gray-800 font-serif">Akinox</span>
                </div>

                {/* Center: Search Bar */}
                <div className="flex-grow mx-8">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for watches..."
                            className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:border-gray-500"
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                            <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 1a3 3 0 00-3 3v7a3 3 0 006 0V4a3 3 0 00-3-3z" />
                                <path d="M19 10a1 1 0 10-2 0 5 5 0 01-10 0 1 1 0 10-2 0 7 7 0 006 6.93V19h-3a1 1 0 000 2h8a1 1 0 000-2h-3v-2.07A7 7 0 0019 10z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Right Side: User Actions with Icons */}
                <div className="flex items-center space-x-8">
                    <div className="flex flex-col items-center">
                        <div className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow">
                            <FontAwesomeIcon icon={faUser} className="h-6 w-6 text-gray-700" />
                        </div>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Login</a>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow">
                            <FontAwesomeIcon icon={faHeart} className="h-6 w-6 text-gray-700" />
                        </div>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Favorites</a>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow">
                            <FontAwesomeIcon icon={faCartShopping} className="h-6 w-6 text-gray-700" />
                        </div>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Cart</a>
                    </div>
                    <button className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Horizontal Menu Section */}
            <div className="border-t border-gray-300 bg-gray-100 py-2">
                <div className="container mx-auto px-6 flex justify-around">
                    {["Men", "Women", "Smart Watches", "Premium Watches", "Watches", "International Brands", "Gifting", "Sale", "Watch Service", "More"].map((item) => (
                        <div className="relative group" key={item}>
                            <a href="#" className="text-gray-700 hover:text-gray-900">
                                {item}
                            </a>
                            <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gray-700 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></div>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}
