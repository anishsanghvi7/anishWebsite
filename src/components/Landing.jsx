import '../styles/Landing.css';
import wavesBg from '../assets/wavesBackground.mp4';
import { useEffect, useState } from 'react';

export default function Landing({isLoading, setIsLoading}) {

    const handleVideoLoaded = () => {
        const interval = setInterval(() => {
            setIsLoading(false);
        }, 1000);
        
        return () => {
            clearInterval(interval)
        }
    };

    return (
        <>
        <div id='landingContainer' className='flex w-[100vw] h-[100vh] items-center justify-center text-white p-[0]'>
            {/* Background overlay */}
            <div className="absolute inset-0 bg-[#111e21] z-[-11]"></div>

            {/* Video Background */}
            <video
                id="backgroundWaves"
                className={`${isLoading ? 'opacity-0' : 'opacity-100'} w-[100vw] h-[100vh] fixed top-0 left-0 w-screen h-screen object-cover -z-10 brightness-50 overflow-hidden overflow-hidden transition-opacity duration-6000 ease-in-out`}
                autoPlay
                loop
                muted
                onCanPlayThrough={handleVideoLoaded}
            >
                <source src={wavesBg} type="video/mp4" />
            </video>

            {/* Navbar */}
            <h1 className='text-6xl'>Hi</h1>

            {/* Text */}
        </div>
        </>
    )
}
