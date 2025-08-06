import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { MainProvider } from './Context/context';
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import ScrollToTop from "./components/ScrollToTop";
import MyWork from "./pages/MyWork";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <MainProvider>
      <Router>
        <Box sx={{ bgcolor: 'white', minHeight: '100vh' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<MyWork />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </Box>
      </Router>
    </MainProvider>
  );
}

export default App
