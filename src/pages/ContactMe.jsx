import {
    Box,
    Button,
    Stack,
    Typography,
    TextField,
    Paper,
    IconButton,
    Link,
    MenuItem,
    Alert,
    CircularProgress
} from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import SEOHead from "../components/SEOHead";
import { useMainContext } from "../Context/context";
import ImageDisplay from "../components/ImageDisplay";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';

function ContactMe() {
    const { img11 } = useMainContext();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            setSubmitSuccess(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                projectType: '',
                message: ''
            });

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitSuccess(false), 5000);
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const socialLinks = [
        { icon: InstagramIcon, label: '@lina_interiors_nyc', href: 'https://instagram.com/lina_interiors_nyc' },
        { icon: FacebookIcon, label: 'Lina Interiors Studio', href: 'https://facebook.com/linainteriorsstudio' },
        { icon: WhatsAppIcon, label: '+1 (212) 555-0123', href: 'tel:+12125550123' },
        { icon: EmailIcon, label: 'hello@linainteriors.com', href: 'mailto:hello@linainteriors.com' }
    ];

    const contactInfo = [
        { icon: PhoneIcon, label: '+1 (212) 555-0123', href: 'tel:+12125550123' },
        { icon: EmailIcon, label: 'hello@linainteriors.com', href: 'mailto:hello@linainteriors.com' },
        { icon: LocationOnIcon, label: 'New York, NY 10001', href: 'https://maps.google.com/?q=New+York,+NY' }
    ];

    return (
        <Stack spacing={6} sx={{ py: 4 }}>
            <SEOHead
                title="Contact Me - Lina Interiors | Get Your Design Quote"
                description="Ready to transform your space? Contact Lina Interiors for a consultation. Professional interior design services in New York. Get your free quote today."
                keywords="contact interior designer, design consultation, interior design quote, NYC interior design services, home design consultation"
            />

            <SectionTitle title="Contact Me" />
            
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography 
                    variant="h6" 
                    sx={{ 
                        color: 'text.secondary',
                        maxWidth: '600px',
                        margin: 'auto',
                        lineHeight: 1.6
                    }}
                >
                    Ready to transform your space? Let's discuss your interior design project 
                    and bring your vision to life.
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
                    gap: { xs: 4, md: 6 },
                    width: { xs: '95%', md: '85%' },
                    margin: 'auto'
                }}
            >
                {/* Contact Form */}
                <Paper elevation={3} sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ mb: 3, color: '#B7885C' }}>
                        Send a Message
                    </Typography>
                    {submitSuccess && (
                        <Alert severity="success" sx={{ mb: 3 }}>
                            Thank you for your message! I'll get back to you within 24 hours.
                        </Alert>
                    )}

                    <Box component="form" onSubmit={handleSubmit}>
                        <Stack spacing={3}>
                            <TextField
                                fullWidth
                                label="Your Name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                error={!!errors.name}
                                helperText={errors.name}
                                required
                            />
                            <TextField
                                fullWidth
                                label="Email Address"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                error={!!errors.email}
                                helperText={errors.email}
                                required
                            />
                            <TextField
                                fullWidth
                                label="Phone Number (Optional)"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                            <TextField
                                fullWidth
                                select
                                label="Project Type"
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleInputChange}
                                helperText="Please select the type of project you're interested in"
                            >
                                <MenuItem value="residential">Residential Design</MenuItem>
                                <MenuItem value="commercial">Commercial Design</MenuItem>
                                <MenuItem value="consultation">Design Consultation</MenuItem>
                                <MenuItem value="renovation">Home Renovation</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                            </TextField>
                            <TextField
                                fullWidth
                                label="Tell me about your project"
                                name="message"
                                multiline
                                rows={4}
                                value={formData.message}
                                onChange={handleInputChange}
                                error={!!errors.message}
                                helperText={errors.message || "Please describe your project, timeline, and budget range"}
                                required
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={isSubmitting}
                                sx={{
                                    backgroundColor: '#B7885C',
                                    '&:hover': {
                                        backgroundColor: '#A67A52'
                                    },
                                    py: 1.5,
                                    position: 'relative'
                                }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <CircularProgress size={20} sx={{ mr: 1, color: 'white' }} />
                                        Sending...
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </Button>
                        </Stack>
                    </Box>
                </Paper>

                {/* Contact Information */}
                <Stack spacing={4}>
                    <Box>
                        <Typography variant="h5" sx={{ mb: 3, color: '#B7885C' }}>
                            Get in Touch
                        </Typography>
                        <Stack spacing={2}>
                            {contactInfo.map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <item.icon sx={{ color: '#B7885C', mr: 2 }} />
                                    <Link 
                                        href={item.href} 
                                        sx={{ 
                                            color: 'text.primary',
                                            textDecoration: 'none',
                                            '&:hover': { color: '#B7885C' }
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                </Box>
                            ))}
                        </Stack>
                    </Box>

                    <Box>
                        <Typography variant="h6" sx={{ mb: 2, color: '#B7885C' }}>
                            Follow Me
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            {socialLinks.slice(0, 3).map((social, index) => (
                                <IconButton
                                    key={index}
                                    component={Link}
                                    href={social.href}
                                    sx={{
                                        color: '#B7885C',
                                        '&:hover': {
                                            backgroundColor: 'rgba(183, 136, 92, 0.1)'
                                        }
                                    }}
                                >
                                    <social.icon />
                                </IconButton>
                            ))}
                        </Stack>
                    </Box>

                    <ImageDisplay 
                        src={img11} 
                        width="100%" 
                        height="300px" 
                        alt="Interior designer"
                        sx={{ borderRadius: 2 }}
                    />
                </Stack>
            </Box>
        </Stack>
    );
}

export default ContactMe;
