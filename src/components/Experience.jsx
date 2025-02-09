// Import modules
import { useEffect, useState } from 'react';
import '../styles/Experience.css';

export default function Experience() {
    const jobs = [
        {
            title: 'Summer Student',
            company: "Children's Cancer Institute Australia",
            start: 'January 2024',
            end: 'March 2024',
            languages: 'R (R Markdown)',
            info: 'e'
        },
        {
            title: 'Computational Biology Intern',
            company: "Children's Cancer Institute Australia",
            start: 'April 2024',
            end: 'Present',
            languages: 'Python, R (R Markdown)',
            info: 'h'
        }
    ]
    
    return (
        <div className='w-[100vw] h-[60vh] p-[40px] text-[#d4e6e1]'>
            <h2 className='text-[3vw] underline font-bold mb-[20px]'>Professional Experience</h2>
            <div className='flex gap-[20px]'>
                {jobs.map((job, index) => (
                    <div key={index} className='jobContainer'>
                        {job.title}
                    </div>
                ))}
            </div>
        </div>
    )
}