import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Sample testimonial data (replace with your actual testimonials)
const testimonialsData = [
    {
        id: 1,
        name: "John Doe",
        message: "A wonderful experience! I love my new watch.",
        rating: 5,
    },
    {
        id: 2,
        name: "Jane Smith",
        message: "Excellent service and a fantastic selection of watches.",
        rating: 4,
    },
    {
        id: 3,
        name: "Mike Johnson",
        message: "I found exactly what I was looking for. Highly recommend!",
        rating: 5,
    },
    {
        id: 4,
        name: "Emily Davis",
        message: "The quality is outstanding! Will definitely shop again.",
        rating: 4,
    },
    {
        id: 5,
        name: "Chris Lee",
        message: "Fast shipping and great customer service!",
        rating: 5,
    },
];

// StarRating component
const StarRating = ({ rating }) => {
    return (
        <div className="flex">
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    className={`w-4 h-4 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            ))}
        </div>
    );
};

export function Testimonials() {
    const slideSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="testimonials-container py-6 overflow-hidden">
            <h2 className="text-2xl font-bold mb-4 flex justify-center font-serif">What Our Customers Say</h2>
            <Slider {...slideSettings}>
                {testimonialsData.map((testimonial) => (
                    <div key={testimonial.id} className="p-2">
                        <div className="bg-slate-300 rounded-lg shadow-md p-4 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-gray-400">
                            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4">
                                <span className="text-lg font-bold text-gray-900">
                                    {testimonial.name.charAt(0).toUpperCase()}{testimonial.name.split(' ')[1]?.charAt(0).toUpperCase()}
                                </span>
                            </div>
                            <StarRating rating={testimonial.rating} />
                            <p className="italic text-center mt-2">"{testimonial.message}"</p>
                            <h3 className="font-semibold mt-2">{testimonial.name}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
