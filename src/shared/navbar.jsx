import { Box, Stack, Button, useMediaQuery, useTheme, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/Logo/Lina Interiors.png';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const location = useLocation();

    const pages = [
        { name: 'Home', path: '/' },
        { name: 'My Work', path: '/work' },
        { name: 'About Me', path: '/about' },
        { name: 'Contact Me', path: '/contact' }
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLinkClick = () => {
        setMobileOpen(false);
    };

    const getButtonStyles = (path) => ({
        color: location.pathname === path ? '#B7885C' : '#333',
        fontWeight: location.pathname === path ? 700 : 500,
        fontSize: location.pathname === path ? '1.1rem' : '1rem',
        textTransform: 'none',
        px: 2,
        py: 1,
        borderRadius: 2,
        transition: 'all 0.3s ease',
        textDecoration: 'none',
        '&:hover': {
            backgroundColor: 'rgba(183, 136, 92, 0.1)',
            color: '#B7885C'
        }
    });

    const drawer = (
        <Box sx={{ width: 250, pt: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: 2, pb: 2 }}>
                <IconButton onClick={handleDrawerToggle}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                {pages.map((page) => (
                    <ListItem
                        key={page.name}
                        component={Link}
                        to={page.path}
                        onClick={handleLinkClick}
                        sx={{
                            cursor: 'pointer',
                            textDecoration: 'none',
                            '&:hover': { backgroundColor: 'rgba(183, 136, 92, 0.1)' }
                        }}
                    >
                        <ListItemText
                            primary={page.name}
                            sx={{
                                color: location.pathname === page.path ? '#B7885C' : '#333',
                                fontWeight: location.pathname === page.path ? 700 : 500,
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Stack
                width="100%"
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                px={3}
                py={2}
                sx={{
                    bgcolor: '#ECEDE7',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    position: 'sticky',
                    top: 0,
                    zIndex: 1000
                }}
            >
                <Box component={Link} to="/" sx={{ textDecoration: 'none' }}>
                    <img
                        src={logo}
                        alt="Lina Interiors Logo"
                        style={{
                            height: '50px',
                            cursor: 'pointer'
                        }}
                    />
                </Box>

                {isMobile ? (
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        sx={{ color: '#333' }}
                    >
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <Stack direction="row" spacing={1}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                component={Link}
                                to={page.path}
                                sx={getButtonStyles(page.path)}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Stack>
                )}
            </Stack>

            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
}