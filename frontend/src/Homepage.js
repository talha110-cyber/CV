import React from 'react';
import './Homepage.css';

function Homepage() {
    return (
        <div className="homepage">
            {/* Header Section */}
            <header className="header">
                <h1>Muhammad Talha Tariq</h1>
                <p>
                    <a href="https://github.com/talha110-cyber" target="_blank" rel="noopener noreferrer">GitHub</a> • 
                    <a href="https://linkedin.com/in/talhatariq110" target="_blank" rel="noopener noreferrer"> LinkedIn</a> • 
                    <a href="mailto:talha110tariq@gmail.com"> talha110tariq@gmail.com</a> • +923200401823
                </p>
            </header>

            {/* Education Section */}
            <section className="education">
                <h2>Education</h2>
                <div className="education-item">
                    <h3>Lahore University of Management Sciences (LUMS)</h3>
                    <p>B.Sc. Computer Science | Aug 2021 - Present</p>
                    <p>Relevant Coursework: Data Structures, Algorithms, AI, Distributed Systems, and more.</p>
                </div>
                <div className="education-item">
                    <h3>Beaconhouse Defence Campus</h3>
                    <p>A levels | Sept 2019 - Aug 2021</p>
                    <p>Secured 100% scholarship </p>
                </div>
                <div className="education-item">
                    <h3>The City School MTC Lahore</h3>
                    <p>O levels | Sept 2016 - Aug 2019</p>
                    <p>1A*7As</p>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects">
                <h2>Projects</h2>
                <div className="project-item">
                    <h3>Trading Application</h3>
                    <p>Full-stack development using MERN stack and Socket.io for real-time trading.</p>
                </div>
                <div className="project-item">
                    <h3>CampusCousine</h3>
                    <a href="https://github.com/ShafayKashif/se2024" target="_blank" rel="noopener noreferrer">Project Link</a> 
                    <p>Food ordering platform for students using the MERN stack</p>
                </div>
                <div className="project-item">
                    <h3>Centre for Speech and Language Technologies (Csalt)</h3>
                    <p>Directed Research Project with Dr. Agha Ali Raza (PhD. Carnegie Mellon)</p>
                    <p>Sept 23 – May 24</p>
                
                </div>

            </section>

            {/* Volunteer Section */}
            <section className="volunteer">
                <h2>Volunteer Experience</h2>
                <p>Program Coordinator for The Citizens Foundation, managing students from underprivileged backgrounds.</p>
            </section>
        </div>
    );
}

export default Homepage;
