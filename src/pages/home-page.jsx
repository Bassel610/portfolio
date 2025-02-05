import { Box } from "@mui/material";
import Slider from "../views/home-page/Slider";
import Title from "../component/Title";
import OurWork from "../views/home-page/our-work";
import AboutMe from "../views/home-page/about-me";
import Img from "../component/img";
import { useMainContext } from "../Context/context";

export default function Home_Page() {
  const {img10} = useMainContext()

  return (
    <Box>
        <Slider />
        <Title alignItems="center" title='Our Work' />
        <OurWork />
        <Title alignItems="center" title='Me' />
        <AboutMe />
        <Img src={img10} margin='20px auto' width='80%' height='400px' />
    </Box>
  )
}
