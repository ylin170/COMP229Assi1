
import React from 'react';
import './App.css'; 

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Project 1: Task Management System',
            description: [
                'The Task Management System is designed to help students and teachers efficiently manage school-related tasks such as assignments, quizzes, and tests.',
                'This system provides a streamlined interface for students to view their upcoming tasks, submit their work, and receive feedback.',
                'Teachers can easily create, assign, and track the progress of various tasks, ensuring that students stay on top of their academic responsibilities.'
            ],
            image: '/image/project1.png'
        },
        {
            id: 2,
            title: 'Project 2: Students Grade Performance System',
            description: [
                'The Students Grade Performance System is a comprehensive platform that allows parents to monitor the academic performance of their children.',
                'This system provides real-time access to grades, attendance records, and teacher comments.'
            ],
            image: '/image/project2.jpg'
        },
        {
            id: 3,
            title: 'Project 3: Shop Database System',
            description: [
                'The Shop Database System is an efficient solution for managing orders and deliveries in a retail environment.',
                'This system enables customers to place orders online, track their order status, and ensure timely deliveries.',
                'It also provides shop owners with tools to manage inventory, process orders, and handle logistics effectively.'
            ],
            image: '/image/project3.png'
        }
    ];

    return (
        <div className="projects">
            <h1>Projects</h1>
            {projects.map(project => (
                <div className="project" key={project.id}>
                    <img src={project.image} alt={project.title} className="project-image" />
                    {project.description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Projects;
