// Cart.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export function Cart() {
    const slideSettings = {
        dots: true,
        infinite: false, // Set to false to stop looping
        speed: 500,
        slidesToShow: 4, // Show 4 slides at a time
        slidesToScroll: 1,
        autoplay: false, // Stop automatic sliding
        responsive: [
            {
                breakpoint: 1024, // Adjust for slightly larger screens
                settings: {
                    slidesToShow: 3, // Show 3 slides on medium screens
                },
            },
            {
                breakpoint: 768, // Adjust for smaller screens
                settings: {
                    slidesToShow: 2, // Show 2 slides on smaller screens
                },
            },
            {
                breakpoint: 480, // Adjust for very small screens
                settings: {
                    slidesToShow: 1, // Show 1 slide on very small screens
                },
            },
        ],
    };

    return (
        <div className="cart-container py-6 overflow-hidden">
            <h2 className="text-2xl font-bold mb-4 flex justify-center font-serif">Recommended for You</h2>
            <Slider {...slideSettings}>
                {/* Individual watch divs */}
                


                <div className=" m-20  flex justify-center transition-transform transform hover:scale-105 hover:shadow-lg hover:border-2 hover:border-gray-500 hover:shadow-gray-500 rounded-lg shadow-md overflow-hidden"> {/* Watch 1 */}
                    <div 
                        className="bg-[url('C:\Users\Ashish\Desktop\Akinox\frontend\src\assets\watch1.jpg')] bg-cover bg-center bg-cover bg-center   h-72">
                        </div>
                    <div className="p-4 flex h-20  bg-white  justify-between bg-black"> {/* Flex column for layout */}
                    <h3 className="text-lg font-semibold text-black">Titan Delux</h3>
                    <p className="text-black">₹2000</p>
                    </div>
                    
                </div>


                
                <div className=" m-20 flex justify-center transition-transform transform hover:scale-105 hover:shadow-lg hover:border-2 hover:border-gray-500 hover:shadow-gray-500 rounded-lg shadow-md overflow-hidden"> {/* Watch 1 */}
                    <div 
                        className="bg-[url('C:\Users\Ashish\Desktop\Akinox\frontend\src\assets\watch2.jpg')] bg-cover bg-center bg-cover bg-center   h-72">
                        </div>
                    <div className="p-4 flex h-20  bg-white  justify-between bg-black"> {/* Flex column for layout */}
                    <h3 className="text-lg font-semibold text-black">Hilfiger Premium Edition</h3>
                    <p className="text-black">₹5000</p>
                    </div>
                    
                </div>


                <div className=" m-20 flex justify-center transition-transform transform hover:scale-105 hover:shadow-lg hover:border-2 hover:border-gray-500 hover:shadow-gray-500 rounded-lg shadow-md overflow-hidden"> {/* Watch 1 */}
                    <div 
                        className="bg-[url('C:\Users\Ashish\Desktop\Akinox\frontend\src\assets\watch3.jpg')] bg-cover bg-center bg-cover bg-center   h-72">
                        </div>
                    <div className="p-4 flex h-20  bg-white  justify-between bg-black"> {/* Flex column for layout */}
                    <h3 className="text-lg font-semibold text-black">Casio Casuals</h3>
                    <p className="text-black">₹2000</p>
                    </div>
                    
                </div>

                <div className=" m-20 flex justify-center transition-transform transform hover:scale-105 hover:shadow-lg hover:border-2 hover:border-gray-500 hover:shadow-gray-500 rounded-lg shadow-md overflow-hidden"> {/* Watch 1 */}
                    <div 
                        className="bg-[url('C:\Users\Ashish\Desktop\Akinox\frontend\src\assets\watch4.jpg')] bg-cover bg-center bg-cover bg-center   h-72">
                        </div>
                    <div className="p-4 flex h-20  bg-white  justify-between bg-black"> {/* Flex column for layout */}
                    <h3 className="text-lg font-semibold text-black">Allen Solly </h3>
                    <p className="text-black">₹3200</p>
                    </div>
                    
                </div>


                <div className=" m-20 flex justify-center transition-transform transform hover:scale-105 hover:shadow-lg hover:border-2 hover:border-gray-500 hover:shadow-gray-500 rounded-lg shadow-md overflow-hidden"> {/* Watch 1 */}
                    <div 
                        className="bg-[url('C:\Users\Ashish\Desktop\Akinox\frontend\src\assets\watch5.jpg')] bg-cover bg-center bg-cover bg-center   h-72">
                        </div>
                    <div className="p-4 flex h-20  bg-white  justify-between bg-black"> {/* Flex column for layout */}
                            <h3 className="text-lg font-semibold text-black">Rado</h3>
                            <p className="text-black">₹5200</p>
                    </div>
                    
                </div>
            </Slider>
        </div>
    );
}
