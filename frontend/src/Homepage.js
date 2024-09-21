import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Homepage.css';

function Homepage() {
    const [ip, setIp] = useState('');

    useEffect(() => {
        // Fetch the IP address from an external API
        axios.get('https://api.ipify.org?format=json')
            .then(response => {
                setIp(response.data.ip); // Store the IP in the state
            })
            .catch(error => {
                console.error('Error fetching the IP:', error);
            });
    }, []);

    return (
        <div className="homepage">
            <h1>Welcome to the Homepage</h1>
            <p>Your IP is: {ip ? ip : 'Loading...'}</p>
        </div>
    );
}

export default Homepage;
