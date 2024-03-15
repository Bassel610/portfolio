import Footer from "../../AllComponand/Footer";
import Nav from "../../AllComponand/Nav";
import Img from "../../AllComponand/Slider";
import Main10 from "../../Images/Main10.jpg";
import Main2 from "../../Images/Main2.jpg";
import Main3 from "../../Images/Main3.jpg";
import Main7 from "../../Images/Main7.jpg";
import AboutUs from "./AboutUs";
import AboutWork from "./AboutWork";
import Swiber from "./Swiber";
import { useEffect } from "react";
function HomePage () {
    useEffect(() => window.scroll(0, 0), [])

    const slides = [    
        { url: Main10, title: "beach" },
        { url: Main2, title: "beach" },
        { url: Main3, title: "beach" },
        { url: Main7, title: "beach" },

    ];
    const containerStyles = {
        width: "100%",
        height:  "650px",
        margin: "0 auto",
    };

    return (
        <>
    <Nav />
    <div style={containerStyles}>
        <Img slides={slides} />
    </div>
    <AboutWork />
    <AboutUs />
    <Swiber />
    <Footer />
        </>
    )
}
export default HomePage