import React, { useEffect, useState } from 'react';
import './Homepage.css';  // Import the CSS file

function Homepage() {
    const [name, setName] = useState("");

    useEffect(() => {
        fetch('http://localhost:3000/api/name')  // Adjusted fetch URL to work with the deployed server
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setName(data.name))
            .catch((error) => console.error('Error fetching name:', error));
    }, []);
    
    return (
        <div className="homepage">
            <h1>Hello, my name is {name}</h1>
        </div>
    );
}

export default Homepage;
