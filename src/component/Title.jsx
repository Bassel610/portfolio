import { Box, Stack, Typography } from "@mui/material"



function Title ({title, alignItems, About}) {
    return (
        <Stack width='100%' alignItems={alignItems} justifyContent='center'>
            <Typography  variant="h4" component='h4' sx={{margin: '20px 0', fontWeight :'700', width: '276px', 'textAlign': 'center'}}>
                {About ? null : 'About'}<Typography variant="span" component='span' sx={{color: '#B7885C'}}> {title} </Typography>
            </Typography>
        </Stack>
    )
}

export default Title