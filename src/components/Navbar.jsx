import { useEffect, useState } from 'react';
import '../styles/Landing.css';

export default function Navbar({isLoading}) {
    const [bgColor, setBgColor] = useState("#111e21");
    const [textColor, setTextColor] = useState("text-white");
        
    return (
        <>
        {!isLoading && (
            <div id='navbar' className='flex w-[100vw] fixed color-white top-10 gap-20 items-center justify-center text-center text-white text-[1vw]'>
                <p>Home</p>
                <p>Experience</p>
                <p>Projects</p>
            </div>
        )}
        </>
    )
}