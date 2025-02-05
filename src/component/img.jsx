import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { FastAverageColor } from "fast-average-color"; 

function Img({ src, height, width, isBorder, margin, showDescription }) {
  const [dominantColor, setDominantColor] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [showDescriptionBox, setShowDescriptionBox] = useState(false);
  
  const imgRef = useRef(null);
  const previewImgRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      const fac = new FastAverageColor();
      fac.getColorAsync(imgRef.current).then((color) => {
        setDominantColor(color.hexa);
      });
    }
  }, [src]); // Only runs when the image src changes

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowDescriptionBox(true);
  };

  const handleMouseLeave = (e) => {
    setTimeout(() => {
      if (!imgRef?.current?.contains(e.relatedTarget) && !boxRef?.current?.contains(e.relatedTarget)) {
        setIsHovered(false);
        setShowDescriptionBox(false);
      }
    }, 100);
  };

  return (
    <Box
      width={width}
      height={height}
      margin={margin}
      sx={{
        position: 'relative',
        border: isBorder ? `8px solid ${dominantColor || '#979897ff'}` : '',
        transition: 'border-color 0.3s ease',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img ref={imgRef} width="100%" height="100%" src={src} alt="###" />
      
      {showDescription && showDescriptionBox && (
        <Stack
          ref={boxRef}
          alignItems="center"
          justifyContent="center"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `2px solid ${dominantColor || '#979897ff'}`,
          }}
        >
          <Box width="300px" height="200px" sx={{ border: `8px solid ${dominantColor || '#979897ff'}` }}>
            <img ref={previewImgRef} width="100%" height="100%" src={src} alt="###" />
          </Box>
          <Typography sx={{ textAlign: 'left', marginTop: '8px', marginLeft: '4px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet urna, sit amet suscipit ante.
          </Typography>
        </Stack>
      )}
    </Box>
  );
}

export default Img;
