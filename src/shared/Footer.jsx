import { Stack, Typography, IconButton, Link, Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    const socialLinks = [
        { icon: InstagramIcon, href: 'https://instagram.com/lina_interiors_nyc', label: 'Instagram' },
        { icon: FacebookIcon, href: 'https://facebook.com/linainteriorsstudio', label: 'Facebook' },
        { icon: WhatsAppIcon, href: 'tel:+12125550123', label: 'WhatsApp' },
        { icon: EmailIcon, href: 'mailto:hello@linainteriors.com', label: 'Email' }
    ];

    return (
        <Stack
            width="100%"
            direction={{ xs: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            sx={{
                bgcolor: '#2C2C2C',
                py: 3,
                px: 4,
                mt: 6
            }}
        >
            <Box>
                <Typography
                    variant="h6"
                    sx={{
                        color: '#F5B57A',
                        fontWeight: 600,
                        mb: { xs: 2, md: 0 }
                    }}
                >
                    Lina Interiors
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: '#CCCCCC',
                        display: { xs: 'block', md: 'none' }
                    }}
                >
                    Creating beautiful spaces since 2016
                </Typography>
            </Box>

            <Stack
                direction="row"
                spacing={2}
                alignItems="center"
            >
                {socialLinks.map((social, index) => (
                    <IconButton
                        key={index}
                        component={Link}
                        href={social.href}
                        aria-label={social.label}
                        sx={{
                            color: '#F5B57A',
                            '&:hover': {
                                backgroundColor: 'rgba(245, 181, 122, 0.1)',
                                transform: 'translateY(-2px)'
                            },
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <social.icon />
                    </IconButton>
                ))}
            </Stack>

            <Typography
                variant="body2"
                sx={{
                    color: '#CCCCCC',
                    textAlign: { xs: 'center', md: 'right' }
                }}
            >
                © 2024 Lina Interiors. All rights reserved.
            </Typography>
        </Stack>
    );
}
