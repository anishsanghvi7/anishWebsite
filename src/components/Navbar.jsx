import { useEffect, useState } from 'react';
import '../styles/Landing.css';

export default function Navbar({isLoading}) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 200) {
            setVisible(true);
        } else {
            setVisible(false);
        }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // now visible false then make sidebar
    
    return (
        <>
        {!isLoading && (
            <div id='navbar' className={`flex w-[100vw] fixed color-white top-10 gap-20 items-center justify-center text-center text-white text-[1.3vw] ${visible ? "hidden" : ""}`}>
                <p>About Me</p>
                <p>Experience</p>
                <p>Projects</p>
            </div>
        )}
        </>
    )
}