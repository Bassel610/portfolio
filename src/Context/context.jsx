import React, { createContext, useContext } from 'react';
import img1 from '../assets/imgs/angela-bailey-8KzgXVPTZn0-unsplash.jpg';
import img2 from '../assets/imgs/curology-6CJg-fOTYs4-unsplash.jpg';
import img3 from '../assets/imgs/jon-stebbe-paydk0JcIOQ-unsplash.jpg';
import img4 from '../assets/imgs/kam-idris-kyt0PkBSCNQ-unsplash.jpg';
import img5 from '../assets/imgs/kenny-eliason-Wp7t4cWN-68-unsplash.jpg';
import img6 from '../assets/imgs/michael-oxendine-GHCVUtBECuY-unsplash.jpg';
import img7 from '../assets/imgs/naomi-hebert-MP0bgaS_d1c-unsplash.jpg';
import img8 from '../assets/imgs/r-architecture-TRCJ-87Yoh0-unsplash.jpg';
import img9 from '../assets/imgs/spacejoy-c0JoR_-2x3E-unsplash.jpg';
import img10 from '../assets/imgs/spacejoy-RqO6kwm4tZY-unsplash.jpg';
import img11 from '../assets/imgs/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg';
import img12 from '../assets/imgs/vinicius-amnx-amano-17NCG_wOkMY-unsplash.jpg';
import img13 from '../assets/imgs/spacejoy-trG8989WjFA-unsplash.jpg';

// Create the context with a default value
const MainContext = createContext(undefined);

export const MainProvider = ({ children }) => {
    const projectData = [
        {
            id: 1,
            image: img1,
            title: "Modern Living Room",
            description: "A contemporary living space featuring clean lines, neutral tones, and carefully curated furniture that creates a perfect balance between comfort and sophistication.",
            category: "Residential",
            year: "2024"
        },
        {
            id: 2,
            image: img2,
            title: "Minimalist Bedroom",
            description: "Serene bedroom design emphasizing simplicity and tranquility with a monochromatic palette and natural materials for the ultimate relaxation space.",
            category: "Residential",
            year: "2024"
        },
        {
            id: 3,
            image: img3,
            title: "Industrial Kitchen",
            description: "Bold kitchen design combining industrial elements with modern functionality, featuring exposed brick, steel accents, and warm wood tones.",
            category: "Residential",
            year: "2023"
        },
        {
            id: 4,
            image: img4,
            title: "Cozy Reading Nook",
            description: "Intimate reading corner designed for comfort and focus, with built-in shelving, soft lighting, and plush seating in warm, inviting colors.",
            category: "Residential",
            year: "2023"
        },
        {
            id: 5,
            image: img5,
            title: "Open Concept Dining",
            description: "Spacious dining area that seamlessly flows into the living space, featuring statement lighting and a mix of textures for visual interest.",
            category: "Residential",
            year: "2024"
        },
        {
            id: 6,
            image: img6,
            title: "Luxury Bathroom",
            description: "Spa-like bathroom retreat with marble finishes, brass fixtures, and carefully planned lighting to create a luxurious daily experience.",
            category: "Residential",
            year: "2023"
        },
        {
            id: 7,
            image: img7,
            title: "Home Office Studio",
            description: "Productive workspace designed for creativity and focus, combining ergonomic furniture with inspiring decor and optimal natural lighting.",
            category: "Commercial",
            year: "2024"
        },
        {
            id: 8,
            image: img8,
            title: "Contemporary Entryway",
            description: "Welcoming entrance that sets the tone for the entire home, featuring statement art, functional storage, and dramatic lighting.",
            category: "Residential",
            year: "2023"
        },
        {
            id: 9,
            image: img9,
            title: "Scandinavian Living",
            description: "Light-filled living room inspired by Scandinavian design principles, emphasizing hygge with natural materials and cozy textures.",
            category: "Residential",
            year: "2024"
        },
        {
            id: 10,
            image: img10,
            title: "Modern Workspace",
            description: "Collaborative office environment designed to boost productivity and creativity with flexible furniture and biophilic design elements.",
            category: "Commercial",
            year: "2024"
        },
        {
            id: 11,
            image: img12,
            title: "Elegant Dining Room",
            description: "Sophisticated dining space perfect for entertaining, featuring rich textures, ambient lighting, and carefully selected artwork.",
            category: "Residential",
            year: "2023"
        },
        {
            id: 12,
            image: img13,
            title: "Boutique Retail Space",
            description: "Inviting retail environment designed to enhance the shopping experience with strategic lighting, display areas, and comfortable browsing zones.",
            category: "Commercial",
            year: "2024"
        }
    ];

    const images = projectData.map(project => project.image);

    return (
        <MainContext.Provider value={{
            images,
            projectData,
            img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13,
        }}>
            {children}
        </MainContext.Provider>
    );
};

// Custom hook to use the UserContext
export const useMainContext = () => {
    const context = useContext(MainContext);
    if (!context) {
    throw new Error('Error On Main Context');
    }
    return context;
};
