import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import ScrollToTop from "./components/ScrollToTop";
import ThankYou from "./components/ThankYou";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/thank-you" element={<ThankYou/>}/>
      </Routes>
    </Router>
  );
}

export default App;