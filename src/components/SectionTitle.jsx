import { Box, Stack, Typography } from "@mui/material";

function SectionTitle({ title, alignItems = "center", subtitle }) {
    return (
        <Stack 
            width="100%" 
            alignItems={alignItems} 
            justifyContent="center"
            spacing={1}
            sx={{ mb: 4 }}
        >
            <Typography  
                variant="h3" 
                component="h2" 
                sx={{
                    fontWeight: 700,
                    textAlign: 'center',
                    color: 'text.primary',
                    mb: 1
                }}
            >
                <Typography 
                    variant="span" 
                    component="span" 
                    sx={{ color: '#B7885C' }}
                >
                    {title}
                </Typography>
            </Typography>
            
            {subtitle && (
                <Typography 
                    variant="h6" 
                    sx={{ 
                        color: 'text.secondary',
                        textAlign: 'center',
                        fontWeight: 400,
                        maxWidth: '600px'
                    }}
                >
                    {subtitle}
                </Typography>
            )}
        </Stack>
    );
}

export default SectionTitle;
