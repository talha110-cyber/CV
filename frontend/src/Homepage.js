// src/Homepage.js
import React, { useEffect, useState } from 'react';

function Homepage() {
    const [name, setName] = useState("");
    useEffect(() => {
        fetch('http://localhost:3000/api/name')  // Explicitly specify the port
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
        <div>
            <h1>Hello, my name is {name}</h1>
        </div>
    );
}

export default Homepage;
