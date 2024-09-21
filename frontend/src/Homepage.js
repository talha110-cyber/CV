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

                // Send the IP to the Google Sheets API
                axios.post('https://script.google.com/macros/s/AKfycbw4XGrSOeCAkYKc4hN2RRz5UwTnpQFmF2DAzp0Ad-QgQjZXvQqIY0Ho85zSSrpGThybjw/exec', { ip: fetchedIp }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(response => {
                    console.log('IP sent to Google Sheets successfully:', response.data);
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
        <div className="homepage">
            <h1>Welcome to the Homepage</h1>
            <p>Your IP is: {ip ? ip : 'Loading...'}</p>
        </div>
    );
}
