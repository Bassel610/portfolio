import { Box, CircularProgress, Typography } from '@mui/material';

function LoadingSpinner({ message = "Loading...", size = 40 }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '200px',
                gap: 2
            }}
        >
            <CircularProgress 
                size={size} 
                sx={{ 
                    color: 'primary.main',
                    '& .MuiCircularProgress-circle': {
                        strokeLinecap: 'round',
                    }
                }} 
            />
            <Typography 
                variant="body2" 
                sx={{ 
                    color: 'text.secondary',
                    textAlign: 'center'
                }}
            >
                {message}
            </Typography>
        </Box>
    );
}

export default LoadingSpinner;
