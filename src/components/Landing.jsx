import '../styles/Landing.css';
import wavesBg from '../assets/wavesBackground.mp4';
import { useEffect, useState } from 'react';

export default function Landing({isLoading, setIsLoading}) {

    const handleVideoLoaded = () => {
        const interval = setInterval(() => {
            setIsLoading(false);
        }, 500);
        
        return () => {
            clearInterval(interval)
        }
    };

    return (
        <>
        <div id='landingContainer' className='flex w-[100vw] h-[100vh] items-center justify-center text-white p-[0]'>
            {/* Background overlay */}
            <div className="absolute inset-0 bg-[#111e21] z-[-11] w-[100vw]"></div>

            {/* Video Background */}
            <video
                id="backgroundWaves"
                className={`w-[100vw] h-[100vh] fixed top-0 left-0 w-screen h-screen object-cover -z-10 brightness-40 overflow-hidden`}
                autoPlay
                loop
                muted
                onCanPlayThrough={handleVideoLoaded}
            >
                <source src={wavesBg} type="video/mp4" />
            </video>

            {/* Text */}
            {!isLoading && (
                <div id='landingText' className='flex flex-col text-center items-center space-y-2'>
                    <nav className="flex space-x-3 m-0">
                        <a href="https://github.com/anishsanghvi7" 
                            target="_blank" 
                            className="text-black bg-white p-2 rounded-lg w-[34px] h-[34px] flex items-center justify-center text-[20px] hover:bg-gray-500 hover:text-white transition"
                        >
                            <i className="fa fa-github"></i>
                        </a> 
                        <a href="https://www.linkedin.com/in/anish-sanghvi7/" 
                            target="_blank"
                            className="text-black bg-white p-2 rounded-lg w-[34px] h-[34px] flex items-center justify-center text-[20px] hover:bg-gray-500 hover:text-white transition"
                        >
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </nav>
                    <h3 className='text-[7vw] font-bold leading-tight m-0'>Hi I'm Anish</h3>
                    <h3 className='text-[3vw] font-bold leading-tight'>Bioinformatics Engineer + Biomedical Engineer</h3>
                </div>
            )}
        </div>
        </>
    )
}
