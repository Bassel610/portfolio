import { useEffect } from 'react';

function SEOHead({ 
    title = "Lina Interiors - Professional Interior Design Services", 
    description = "Transform your space with Lina Interiors. Professional interior design services in New York. Residential and commercial design solutions.",
    keywords = "interior design, home design, commercial design, New York interior designer, residential design, modern interiors",
    image = "/og-image.jpg"
}) {
    useEffect(() => {
        // Update document title
        document.title = title;
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = description;
            document.head.appendChild(meta);
        }
        
        // Update meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', keywords);
        } else {
            const meta = document.createElement('meta');
            meta.name = 'keywords';
            meta.content = keywords;
            document.head.appendChild(meta);
        }
        
        // Update Open Graph tags
        const updateOGTag = (property, content) => {
            let tag = document.querySelector(`meta[property="${property}"]`);
            if (tag) {
                tag.setAttribute('content', content);
            } else {
                tag = document.createElement('meta');
                tag.setAttribute('property', property);
                tag.setAttribute('content', content);
                document.head.appendChild(tag);
            }
        };
        
        updateOGTag('og:title', title);
        updateOGTag('og:description', description);
        updateOGTag('og:image', image);
        updateOGTag('og:type', 'website');
        
        // Update Twitter Card tags
        const updateTwitterTag = (name, content) => {
            let tag = document.querySelector(`meta[name="${name}"]`);
            if (tag) {
                tag.setAttribute('content', content);
            } else {
                tag = document.createElement('meta');
                tag.setAttribute('name', name);
                tag.setAttribute('content', content);
                document.head.appendChild(tag);
            }
        };
        
        updateTwitterTag('twitter:card', 'summary_large_image');
        updateTwitterTag('twitter:title', title);
        updateTwitterTag('twitter:description', description);
        updateTwitterTag('twitter:image', image);
        
    }, [title, description, keywords, image]);

    return null; // This component doesn't render anything
}

export default SEOHead;
