// Import modules
import { useEffect, useState } from 'react';
import '../styles/Intro.css';

export default function Intro() {
    const languages = ["R", "Python", "HTML", "CSS", "JavaScript", "React", "Bash", "Java", "C"];

    return (
        <>
        <div className='flex w-[100vw] h-[55vh] p-[40px] bg-[#111e21] text-white pb-0'>
            <h2 className='font-bold text-[#7ab4c2] aboutMeHeader'>about me</h2>
            <p className='flex-4 text-[1.8vw] items-center content-center'>
                I'm currently a penultimate Bioinformatics Engineering and Biomedical Engineering Student at the University of New South Wales with a <b>strong interest in Data Science and Fronted Engineering</b>.
                <br /><br />I enjoy combining my technical skills in machine learning, data visualisation, and software development to create impactful solutions, 
                whether it’s building tools for genomic analysis or designing intuitive user interfaces. With <b>professional experience in Python, R, and web technologies 
                including HTML/CSS, JavaScript and React,</b> I’m passionate about leveraging data and design to solve complex problems and create seamless user experiences.
            </p>
        </div>

        <div className='w-[100vw] h-[20vh] px-[40px] bg-[#111e21] text-white'>
            <h2 className='text-center font-bold text-[3vw] underline text-[#7ab4c2]'>Languages</h2>
            <div className="flex flex-wrap justify-center w-full mt-[10px] gap-2.5">
                {languages.map((language, index) => (
                    <button key={index} id="languageBox">
                        {language}
                    </button>
                ))}
            </div>
        </div>
        </>
    )
}