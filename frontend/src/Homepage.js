import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Homepage() {
    const [ip, setIp] = useState('');

    useEffect(() => {
        // Fetch the IP address from an external API
        axios.get('https://api.ipify.org?format=json')
            .then(response => {
                const fetchedIp = response.data.ip;
                setIp(fetchedIp);

                // Use a CORS proxy to send the IP to the Google Apps Script
                const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
                const scriptUrl = 'https://script.google.com/macros/s/AKfycbyRSkGDnOlIDdqCo5oiOxhg1dI1jroU37a8f-Gg2RnivdU6OOVx0FiiApU_GioG4JXhjQ/exec';
                axios.post(proxyUrl + scriptUrl, { ip: fetchedIp }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(() => {
                    console.log('IP sent to Google Sheets successfully');
                })
                .catch(error => {
                    console.error('Error sending IP to Google Sheets:', error);
                });
            })
            .catch(error => {
                console.error('Error fetching the IP:', error);
            });
    }, []);

    return (
        <div>
            <h1>Welcome to the Homepage</h1>
            <p>Your IP is: {ip ? ip : 'Loading...'}</p>
        </div>
    );
}

export default Homepage;
