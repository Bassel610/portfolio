import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useMainContext } from '../../Context/context';
import ImageDisplay from '../../components/ImageDisplay';

function AboutPreview() {
    const { img11 } = useMainContext();
    
    return (
        <Box sx={{ py: 4 }}>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    gap: 4,
                    width: '85%',
                    margin: 'auto'
                }}
            >
                <Box flex={1}>
                    <Typography
                        variant="body1"
                        sx={{
                            lineHeight: 1.8,
                            fontSize: '1.1rem',
                            color: 'text.secondary',
                            mb: 3
                        }}
                    >
                        Hi, I'm Lina! With 8+ years of experience in interior design, I've dedicated
                        my career to creating spaces that are both beautiful and deeply personal.
                        My approach combines modern aesthetics with timeless functionality, ensuring
                        every design reflects the unique personality of its inhabitants.
                        <br /><br />
                        From intimate residential projects to large-scale commercial spaces, I believe
                        that great design has the power to transform not just spaces, but lives.
                        Let's work together to bring your vision to life.
                    </Typography>
                    
                    <Button
                        component={Link}
                        to="/about"
                        variant="contained"
                        sx={{
                            backgroundColor: '#B7885C',
                            textDecoration: 'none',
                            '&:hover': {
                                backgroundColor: '#A67A52'
                            },
                            px: 4,
                            py: 1.5,
                            fontSize: '1rem'
                        }}
                    >
                        Learn More About Me
                    </Button>
                </Box>
                
                <ImageDisplay 
                    src={img11} 
                    width={{ xs: '100%', md: '450px' }}
                    height="350px"
                    alt="Interior designer portrait"
                    sx={{ borderRadius: 3 }}
                />
            </Box>
        </Box>
    );
}

export default AboutPreview;
