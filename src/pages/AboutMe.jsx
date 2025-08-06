import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import SEOHead from "../components/SEOHead";
import { useMainContext } from "../Context/context";
import ImageDisplay from "../components/ImageDisplay";

function AboutMe() {
    const { projectData, img11 } = useMainContext();

    return (
        <Stack spacing={4} sx={{ py: 4 }}>
            <SEOHead
                title="About Me - Lina Interiors | Interior Designer"
                description="Learn about Lina, an award-winning interior designer with 8+ years of experience. Specializing in residential and commercial design in New York."
                keywords="about interior designer, Lina interior designer, NYC designer, residential design expert, commercial design specialist"
            />

            <SectionTitle title="About Me" />
            
            <Box 
                sx={{
                    width: '80%',
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 4,
                    alignItems: 'center'
                }}
            >
                <Box flex={1}>
                    <Typography
                        variant="body1"
                        sx={{
                            lineHeight: 1.8,
                            fontSize: '1.1rem',
                            color: 'text.secondary'
                        }}
                    >
                        Hello! I'm Lina, a passionate interior designer with over 8 years of experience
                        transforming spaces into beautiful, functional environments. My journey began with
                        a degree in Interior Architecture from the New York School of Interior Design,
                        and since then, I've had the privilege of working on over 150 residential and
                        commercial projects.
                        <br /><br />
                        My design philosophy centers on creating spaces that tell a story—your story.
                        I believe that great design should not only be visually stunning but also deeply
                        personal and functional for everyday living. Whether it's a cozy family home,
                        a modern office space, or a luxury retail environment, I approach each project
                        with fresh eyes and unlimited creativity.
                        <br /><br />
                        I specialize in contemporary and modern design styles, with a particular love
                        for sustainable materials and biophilic design elements. My work has been
                        featured in several design publications, and I'm proud to have received the
                        "Rising Designer of the Year" award from Interior Design Magazine in 2023.
                    </Typography>
                </Box>
                
                <ImageDisplay 
                    src={img11} 
                    width="500px" 
                    height="400px" 
                    alt="Interior designer portrait"
                    sx={{ borderRadius: 2 }}
                />
            </Box>

            <SectionTitle title="Featured Work" />
            
            <Box 
                sx={{
                    display: "grid", 
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                    gap: 3,
                    width: '80%', 
                    margin: "auto"
                }}
            >
                {projectData.slice(0, 6).map((project) => (
                    <ImageDisplay
                        key={project.id}
                        showDescription={true}
                        isBorder={true}
                        src={project.image}
                        width="100%"
                        height="300px"
                        alt={project.title}
                        projectData={project}
                    />
                ))}
            </Box>
            
            <Box sx={{ textAlign: 'center', mt: 3 }}>
                <Button
                    component={Link}
                    to="/work"
                    variant="outlined"
                    sx={{
                        color: '#B7885C',
                        borderColor: '#B7885C',
                        textDecoration: 'none',
                        '&:hover': {
                            backgroundColor: '#B7885C',
                            color: 'white'
                        },
                        px: 4,
                        py: 1.5,
                        fontSize: '1rem'
                    }}
                >
                    View All Projects
                </Button>
            </Box>
        </Stack>
    );
}

export default AboutMe;
