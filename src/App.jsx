import { Box } from "@mui/material"
import Home_Page from "./pages/home-page"
import {MainProvider} from './Context/context'
import Navbar from "./shared/navbar";
import Footer from "./shared/Footer";
import { useEffect, useState } from "react";
import My_Work from "./pages/my-work";
import About_Me from "./pages/about-me";
import Contact_Me from "./pages/contact-me";
function App() {
  const [isMain, setIsMain] = useState('Home')
  const [currentComponent, setCurrentComponent] = useState(null)

  const setMain = (newPage) => {
    if (newPage !== isMain) { 
      setIsMain(newPage);
    }
  };
  
  useEffect(() => {
    let component;
  
    switch (isMain) {
      case 'Home':
        component = <Home_Page />;
        break;
      case 'My Work':
        component = <My_Work />;
        break;
      case 'About Me':
        component = <About_Me setMain={setIsMain}  />;
        break;
      case 'Contact Me':
        component = <Contact_Me />;
        break;
      default:
        component = <Home_Page />;
    }
  
    // Only set the new component if it's different
    if (component !== currentComponent) {
      setCurrentComponent(component);
    }
  
  }, [isMain, currentComponent]); 
  return (
    <MainProvider>
    <Box sx={{bgcolor :'white'}}>
    <Navbar setIsMain={setIsMain} isMain={isMain} />
      {currentComponent}
    <Footer />
    </Box>
    </MainProvider>
  )
}

export default App
