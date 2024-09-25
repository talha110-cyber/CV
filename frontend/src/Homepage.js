import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Homepage.css';

function Homepage() {
    const [ip, setIp] = useState('');

   
    useEffect(() => {
        // Fetch the IP address from an external API
        axios.get('https://api.ipify.org?format=json')
            .then(response => {
                const fetchedIp = response.data.ip;
                setIp(fetchedIp);

                // Send the IP address to the server
                const serverUrl = 'http://13.49.230.69:3000/api/receive-ip'; // Update to your backend URL
                axios.post(serverUrl, { ip: fetchedIp }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(() => {
                    console.log('IP sent to server successfully');
                })
                .catch(error => {
                    console.error('Error sending IP to server:', error);
                });
            })
            .catch(error => {
                console.error('Error fetching the IP:', error);
            });
    }, []);
    
    return (
        <div className="homepage">
            <h1>Welcome!</h1>
            <p className="ip-display">Your IP is: {ip ? ip : 'Loading...'}</p>
            <p>soon we will tell you more about yourselves :) </p>
        </div>
    );
}

export default Homepage;
