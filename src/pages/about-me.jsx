import { Box, Button, Stack, Typography } from "@mui/material"
import Title from "../component/Title"
import { useMainContext } from "../Context/context"
import Img from "../component/img"


function About_Me ({MyWork, setMain}) {
    const {images, img11} = useMainContext()
    const handleClick = () => {
        setMain('My Work'); // Set isMain state to 'My Work' when the button is clicked
      };
    return (
        <Stack>
            <Title title='Me' />
            <Box 
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
                mi at nulla scelerisque, et vulputate nulla tempus. Integer ut aliquet urna,
                sit amet suscipit ante. Aliquam erat volutpat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
                mi at nulla scelerisque, et vulputate nulla tempus. Integer ut aliquet urna,
                sit amet suscipit ante. Aliquam erat volutpat.
                </Typography>
            </Box>
            <Img src={img11} margin='30px auto' width='600px' height='500px' />
        </Box>
            <Title title='Our Work' />
            <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" 
                gap="20px"   justifyContent="center" 
                alignItems="center" width='70%' margin="auto">
                {images.slice(0, 6).map((img, index) => (
                    <Img showDescription={true} isBorder={true} src={img} width="400px" height="370px" margin='5px 10px' />
                ))}
            </Box>
            <Button onClick={handleClick} sx={{color :'#B7885C'}}>See More Projects...</Button>
        </Stack>
    )
}

export default About_Me