import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
// index.js or ImageSlider.js
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import {Home} from "./pages/Home"
function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App