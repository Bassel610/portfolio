import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useMainContext } from "../../Context/context";


const Slider= () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {images} = useMainContext()
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Autoplay every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "80%",
        height:'500px',
        margin: "auto",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "10px",
          transition: "transform 0.5s ease-in-out",
        }}
      />
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          '&:hover': { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        }}
      >
        <ChevronLeft />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          '&:hover': { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        }}
      >
        <ChevronRight />
      </IconButton>
      {/* Optional: Add Pagination */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "5px",
        }}
      >
        {images.slice(0, 7).map((_, index) => (
          <Box
            key={index}
            sx={{
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              backgroundColor: currentIndex === index ? "white" : "#D9D9D9",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Slider;
