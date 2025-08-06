import { Box, Stack, Typography, Chip, Fade } from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import SEOHead from "../components/SEOHead";
import { useMainContext } from "../Context/context";
import ImageDisplay from "../components/ImageDisplay";
import { useState } from "react";

function MyWork() {
    const { projectData } = useMainContext();
    const [selectedFilter, setSelectedFilter] = useState('all');

    const categories = ['all', 'residential', 'commercial'];

    const filteredProjects = selectedFilter === 'all'
        ? projectData
        : projectData.filter(project =>
            project.category.toLowerCase() === selectedFilter
        );
    
    return (
        <Stack spacing={4} sx={{ py: 4 }}>
            <SEOHead
                title="Portfolio - Lina Interiors | Interior Design Projects"
                description="Browse Lina's portfolio of residential and commercial interior design projects. See stunning transformations and innovative design solutions in New York."
                keywords="interior design portfolio, residential projects, commercial design, home renovation projects, NYC interior design, design gallery"
            />

            <SectionTitle title="My Work" />
            
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography
                    variant="h6"
                    sx={{
                        color: 'text.secondary',
                        maxWidth: '600px',
                        margin: 'auto',
                        lineHeight: 1.6,
                        mb: 4
                    }}
                >
                    Explore my portfolio of interior design projects, showcasing a range of styles
                    from modern minimalism to classic elegance. Each project reflects my commitment
                    to creating beautiful, functional spaces.
                </Typography>

                {/* Filter Chips */}
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ mb: 4 }}
                >
                    {categories.map((category) => (
                        <Chip
                            key={category}
                            label={category === 'all' ? 'All Projects' : category.charAt(0).toUpperCase() + category.slice(1)}
                            onClick={() => setSelectedFilter(category)}
                            variant={selectedFilter === category ? 'filled' : 'outlined'}
                            sx={{
                                backgroundColor: selectedFilter === category ? '#B7885C' : 'transparent',
                                color: selectedFilter === category ? 'white' : '#B7885C',
                                borderColor: '#B7885C',
                                '&:hover': {
                                    backgroundColor: selectedFilter === category ? '#A67A52' : 'rgba(183, 136, 92, 0.1)',
                                },
                                px: 3,
                                py: 1,
                                fontSize: '0.9rem'
                            }}
                        />
                    ))}
                </Stack>
            </Box>
            
            <Fade in={true} timeout={500}>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)'
                        },
                        gap: { xs: 2, md: 3 },
                        width: { xs: '95%', md: '85%' },
                        margin: "auto",
                        mb: 4
                    }}
                >
                    {filteredProjects.map((project) => (
                        <ImageDisplay
                            key={project.id}
                            showDescription={true}
                            isBorder={true}
                            src={project.image}
                            width="100%"
                            height="350px"
                            alt={project.title}
                            projectData={project}
                        />
                    ))}
                </Box>
            </Fade>

            {filteredProjects.length === 0 && (
                <Box sx={{ textAlign: 'center', py: 4 }}>
                    <Typography variant="h6" color="text.secondary">
                        No projects found for this category.
                    </Typography>
                </Box>
            )}
        </Stack>
    );
}

export default MyWork;
