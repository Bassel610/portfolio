import TextAbout from "../../AllComponand/ComponandForAbout/TextAbout"
import Footer from "../../AllComponand/Footer"
import Nav from "../../AllComponand/Nav"
import  Margin from "../../AllComponand/TheMargine"
import Swiber from "../HomePadge/Swiber"
import { useEffect } from "react"
function AboutMe() {
    useEffect(() => window.scroll(0, 0), [])
    return (
        <>
        <Margin />
        <Nav />
        <TextAbout />
        <Swiber />
        <Footer />
        </>
    )
}
export default AboutMe