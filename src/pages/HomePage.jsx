import { Box } from "@mui/material";
import HeroSlider from "../views/home-page/HeroSlider";
import SectionTitle from "../components/SectionTitle";
import WorkShowcase from "../views/home-page/WorkShowcase";
import AboutPreview from "../views/home-page/AboutPreview";
import ImageDisplay from "../components/ImageDisplay";
import AnimatedSection from "../components/AnimatedSection";
import SEOHead from "../components/SEOHead";
import { useMainContext } from "../Context/context";

export default function HomePage() {
  const { img10 } = useMainContext();

  return (
    <Box>
      <SEOHead
        title="Lina Interiors - Professional Interior Design Services in New York"
        description="Transform your space with Lina Interiors. Award-winning interior designer specializing in residential and commercial design in New York. 8+ years of experience creating beautiful, functional spaces."
        keywords="interior design New York, residential design, commercial design, home renovation, interior designer NYC, modern interiors, luxury design"
      />

      <AnimatedSection animation="fadeIn">
        <HeroSlider />
      </AnimatedSection>

      <AnimatedSection animation="fadeInUp" delay={200}>
        <SectionTitle alignItems="center" title="Our Work" />
        <WorkShowcase />
      </AnimatedSection>

      <AnimatedSection animation="fadeInUp" delay={400}>
        <SectionTitle alignItems="center" title="About Me" />
        <AboutPreview />
      </AnimatedSection>

      <AnimatedSection animation="scaleIn" delay={600}>
        <ImageDisplay
          src={img10}
          margin="40px auto"
          width="80%"
          height="400px"
          alt="Interior design showcase"
        />
      </AnimatedSection>
    </Box>
  );
}
