import React from 'react';
import { Box, Typography } from '@mui/material';
import { useMainContext } from '../../Context/context';
import Img from '../../component/img';
function AboutMe() {
        const {img11} = useMainContext()
  return (
    <Box 
      display="flex" 
      justifyContent="space-between" 
      alignItems="center" 
      sx={{width :'80%' }}
      margin='auto'
    >
      <Box flex={1} sx={{ paddingRight: 2 }}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
          mi at nulla scelerisque, et vulputate nulla tempus. Integer ut aliquet urna,
          sit amet suscipit ante. Aliquam erat volutpat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
          mi at nulla scelerisque, et vulputate nulla tempus. Integer ut aliquet urna,
          sit amet suscipit ante. Aliquam erat volutpat.
        </Typography>
      </Box>
        <Img src={img11} width='400px' height='300px' />
    </Box>
  );
}

export default AboutMe;
