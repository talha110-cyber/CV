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
                setIp(fetchedIp); // Store the IP in the state

                // Send the IP to the Google Sheets API (Google Apps Script URL)
                axios.post('https://script.google.com/macros/s/AKfycbzTMABU5Kvk08e3916UA_hbqiPMo_LPWjuOXeLgbhM_swhcB15HTnWH_YZd_JCPXaxhxg/exec', { ip: fetchedIp })  // Replace with your actual Apps Script URL
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
        <div className="homepage">
            <h1>Welcome to the Homepage</h1>
            <p>Your IP is: {ip ? ip : 'Loading...'}</p>
        </div>
    );
}

export default Homepage;
