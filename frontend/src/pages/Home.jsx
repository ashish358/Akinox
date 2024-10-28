// Home.jsx
import { Navbar } from "../components/Navbar";
// import { Slides } from "../components/Slides";
import { Slides } from "../components/Slides";
import { Cart } from "../components/Cart";
import { Testimonials } from "../components/Testimonials"; // Import the Testimonials component
import { Footer } from "../components/Footer";
import "../index.css"; // Adjusted to relative 0


export function Home() {
    return (
        <div>
            <Navbar />
            <Slides />
            <Cart />
            <Testimonials /> 
            <Footer></Footer>
        </div>
    );
}
