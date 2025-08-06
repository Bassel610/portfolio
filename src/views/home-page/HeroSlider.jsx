import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography, Stack, Fade } from "@mui/material";
import { ChevronLeft, ChevronRight, PlayArrow, Pause } from "@mui/icons-material";
import { useMainContext } from "../../Context/context";

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const { images } = useMainContext();

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Autoplay every 4 seconds

    return () => clearInterval(interval);
  }, [images.length, isPlaying]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Box sx={{ py: 4 }}>
      {/* Hero Text */}
      <Stack spacing={2} sx={{ textAlign: 'center', mb: 4 }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontWeight: 700,
            color: '#2C2C2C',
            fontSize: { xs: '2rem', md: '3rem' }
          }}
        >
          Transform Your Space
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'text.secondary',
            maxWidth: '600px',
            margin: 'auto',
            lineHeight: 1.6
          }}
        >
          Discover exceptional interior design that brings your vision to life. 
          From concept to completion, we create spaces that inspire.
        </Typography>
      </Stack>

      {/* Image Slider */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "95%", md: "85%" },
          height: { xs: '400px', md: '600px' },
          margin: "auto",
          overflow: "hidden",
          borderRadius: 3,
          boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
        }}
      >
        <Fade in={true} timeout={500} key={currentIndex}>
          <Box
            component="img"
            src={images[currentIndex]}
            alt={`Interior design showcase ${currentIndex + 1}`}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: 'block'
            }}
          />
        </Fade>

        {/* Navigation Buttons */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: { xs: "10px", md: "20px" },
            transform: "translateY(-50%)",
            color: "white",
            backgroundColor: "rgba(183, 136, 92, 0.8)",
            size: { xs: 'small', md: 'medium' },
            '&:hover': {
              backgroundColor: "rgba(183, 136, 92, 1)",
              transform: "translateY(-50%) scale(1.1)"
            },
            transition: 'all 0.3s ease'
          }}
        >
          <ChevronLeft />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: { xs: "10px", md: "20px" },
            transform: "translateY(-50%)",
            color: "white",
            backgroundColor: "rgba(183, 136, 92, 0.8)",
            size: { xs: 'small', md: 'medium' },
            '&:hover': {
              backgroundColor: "rgba(183, 136, 92, 1)",
              transform: "translateY(-50%) scale(1.1)"
            },
            transition: 'all 0.3s ease'
          }}
        >
          <ChevronRight />
        </IconButton>

        {/* Play/Pause Button */}
        <IconButton
          onClick={togglePlayPause}
          sx={{
            position: "absolute",
            top: "20px",
            right: "20px",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            '&:hover': { backgroundColor: "rgba(0, 0, 0, 0.7)" },
          }}
        >
          {isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>

        {/* Pagination Dots */}
        <Box
          sx={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "8px",
          }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              onClick={() => handleDotClick(index)}
              sx={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: currentIndex === index ? "#B7885C" : "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                '&:hover': {
                  backgroundColor: currentIndex === index ? "#B7885C" : "rgba(255,255,255,0.8)",
                  transform: 'scale(1.2)'
                }
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSlider;
