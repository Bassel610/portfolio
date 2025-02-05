import { Stack, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function Footer() {
  return (
    <Stack  width='100%'  direction='row' height={60}
            alignItems='center' marginTop='20px'
            pt={1}
            sx={{bgcolor :'#090909'}}>
            <Stack direction='row'  alignItems='center' justifyContent='space-between' width='55%'>
                <Stack direction="row" ml={4} spacing={3}>
                    <InstagramIcon sx={{color : '#F5B57A'}} />
                    <FacebookIcon sx={{color : '#F5B57A'}}  />
                    <WhatsAppIcon sx={{color : '#F5B57A'}}  />
                    <GitHubIcon   sx={{color : '#F5B57A'}}  />
                </Stack>
            <Typography variant='h4' component='h4' sx={{ color :'#F5B57A'}}>Contact Us</Typography>
            </Stack>
    </Stack>
)
}
