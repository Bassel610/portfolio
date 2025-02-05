import { Box, Button, Stack, Typography } from "@mui/material"
import Title from "../component/Title"
import { useMainContext } from "../Context/context"
import Img from "../component/img"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact_Me () {
    const {img11} = useMainContext()
    return (
        <Stack>
            <Title About={true} title='Contact Me' />
            <Stack ml={17.5} spacing={2}>
            <Box sx={{fontFamily: 'cursive'}} fontSize={23} fontWeight={400} display="flex" alignItems="center">
                <InstagramIcon sx={{ color: '#FB8B24', marginRight: 1 }} />
                Instagram
            </Box>
            <Box sx={{fontFamily: 'cursive'}} fontSize={23} fontWeight={400} display="flex" alignItems="center">
                <FacebookIcon sx={{ color: '#FB8B24', marginRight: 1 }} />
                Facebook
            </Box>
            <Box sx={{fontFamily: 'cursive'}} fontSize={23} fontWeight={400} display="flex" alignItems="center">
                <WhatsAppIcon sx={{ color: '#FB8B24', marginRight: 1 }} />
                WhatsApp
            </Box>
            <Box sx={{fontFamily: 'cursive'}} fontSize={23} fontWeight={400} display="flex" alignItems="center">
                <GitHubIcon sx={{ color: '#FB8B24', marginRight: 1 }} />
                GitHub
            </Box>
        </Stack>
            <hr />
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
        </Stack>
    )
}

export default Contact_Me