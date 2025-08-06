import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ImageDisplay from "../../components/ImageDisplay";
import { useMainContext } from "../../Context/context";

function WorkShowcase() {
    const { projectData } = useMainContext();
    const featuredProjects = projectData.slice(0, 6);

    return (
        <Box sx={{ py: 4 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography 
                    variant="h6" 
                    sx={{ 
                        color: 'text.secondary',
                        maxWidth: '600px',
                        margin: 'auto',
                        lineHeight: 1.6
                    }}
                >
                    Discover our latest interior design projects showcasing innovative 
                    solutions and timeless aesthetics.
                </Typography>
            </Box>

            <Box 
                sx={{
                    display: "grid", 
                    gridTemplateColumns: { 
                        xs: '1fr', 
                        sm: 'repeat(2, 1fr)', 
                        md: 'repeat(3, 1fr)' 
                    },
                    gap: 3,
                    width: '85%', 
                    margin: "auto",
                    mb: 4
                }}
            >
                {featuredProjects.map((project, index) => (
                    <ImageDisplay
                        key={project.id}
                        showDescription={true}
                        isBorder={true}
                        src={project.image}
                        width="100%"
                        height="280px"
                        alt={project.title}
                        projectData={project}
                    />
                ))}
            </Box>

            <Box sx={{ textAlign: 'center' }}>
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
        </Box>
    );
}

export default WorkShowcase;
