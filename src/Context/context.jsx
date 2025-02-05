import React, { createContext, useContext, useState, ReactNode } from 'react';
import img1 from '../assets/imgs/angela-bailey-8KzgXVPTZn0-unsplash.jpg'
import img2 from '../assets/imgs/curology-6CJg-fOTYs4-unsplash.jpg'
import img3 from '../assets/imgs/jon-stebbe-paydk0JcIOQ-unsplash.jpg'
import img4 from '../assets/imgs/kam-idris-kyt0PkBSCNQ-unsplash.jpg'
import img5 from '../assets/imgs/kenny-eliason-Wp7t4cWN-68-unsplash.jpg'
import img6 from '../assets/imgs/michael-oxendine-GHCVUtBECuY-unsplash.jpg'
import img7 from '../assets/imgs/naomi-hebert-MP0bgaS_d1c-unsplash.jpg'
import img8 from '../assets/imgs/r-architecture-TRCJ-87Yoh0-unsplash.jpg'
import img9 from '../assets/imgs/spacejoy-c0JoR_-2x3E-unsplash.jpg'
import img10 from '../assets/imgs/spacejoy-RqO6kwm4tZY-unsplash.jpg'
import img11 from '../assets/imgs/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg'
import img12 from '../assets/imgs/vinicius-amnx-amano-17NCG_wOkMY-unsplash.jpg'
import img13 from '../assets/imgs/spacejoy-trG8989WjFA-unsplash.jpg'

// Create the context with a default value
const MainContext = createContext(undefined);

export const MainProvider = ({ children }) => {
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img12,
        img13,
    ];

    return (
    <MainContext.Provider value={{
        images,
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
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
