import { Box, Stack, Typography, Fade, Skeleton } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { FastAverageColor } from "fast-average-color";

function ImageDisplay({
  src,
  height = "300px",
  width = "100%",
  isBorder = false,
  margin = "0",
  showDescription = false,
  alt = "Interior design image",
  sx = {},
  projectData = null,
  description = "Beautiful interior design showcasing modern aesthetics with careful attention to detail and functionality."
}) {
  const [dominantColor, setDominantColor] = useState('#B7885C');
  const [isHovered, setIsHovered] = useState(false);
  const [showDescriptionBox, setShowDescriptionBox] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const imgRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    if (imgRef.current && imageLoaded) {
      const fac = new FastAverageColor();
      fac.getColorAsync(imgRef.current)
        .then((color) => {
          setDominantColor(color.hexa);
        })
        .catch(() => {
          setDominantColor('#B7885C'); // Fallback color
        });
    }
  }, [src, imageLoaded]);

  const handleMouseEnter = () => {
    if (showDescription) {
      setIsHovered(true);
      setShowDescriptionBox(true);
    }
  };

  const handleMouseLeave = (e) => {
    if (showDescription) {
      setTimeout(() => {
        if (!imgRef?.current?.contains(e.relatedTarget) && !boxRef?.current?.contains(e.relatedTarget)) {
          setIsHovered(false);
          setShowDescriptionBox(false);
        }
      }, 100);
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Box
      sx={{
        width,
        height,
        margin,
        position: 'relative',
        border: isBorder ? `4px solid ${dominantColor}` : 'none',
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: showDescription ? 'pointer' : 'default',
        '&:hover': {
          transform: showDescription ? 'scale(1.02)' : 'none',
          boxShadow: showDescription ? '0 8px 25px rgba(0,0,0,0.15)' : 'none',
        },
        ...sx
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!imageLoaded && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{ position: 'absolute', top: 0, left: 0 }}
        />
      )}

      <img
        ref={imgRef}
        width="100%"
        height="100%"
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{
          objectFit: 'cover',
          display: imageLoaded ? 'block' : 'none'
        }}
      />
      
      {showDescription && (
        <Fade in={showDescriptionBox} timeout={300}>
          <Stack
            ref={boxRef}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 3,
              textAlign: 'center'
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: dominantColor,
                  fontWeight: 600,
                  mb: 1
                }}
              >
                {projectData?.title || "Project Details"}
              </Typography>
              {projectData?.category && (
                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.75rem',
                    mb: 2,
                    display: 'block'
                  }}
                >
                  {projectData.category} • {projectData.year}
                </Typography>
              )}
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.6,
                  fontSize: '0.9rem'
                }}
              >
                {projectData?.description || description}
              </Typography>
            </Box>
          </Stack>
        </Fade>
      )}
    </Box>
  );
}

export default ImageDisplay;
