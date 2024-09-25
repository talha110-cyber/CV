const express = require('express');
const path = require('path');
const cors = require('cors');
const geoip = require('geoip-lite');  // Add for IP geolocation
const useragent = require('express-useragent');  // Add for enhanced user-agent parsing
const session = require('express-session');  // For session tracking
const fs = require('fs');  // File system for logging
const morgan = require('morgan');  // HTTP request logger
const app = express();
app.use(express.json()); // Modern Express approach

app.use(cors({
    origin: 'https://main.d1ikypkwvdq9a8.amplifyapp.com/' // Replace with your frontend's domain or '*'
}));

// Use user-agent parser middleware to track more device details
app.use(useragent.express());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));
console.log("welcome to the server")
// API route to receive IP and print it
app.post('/api/receive-ip', (req, res) => {
    const clientIp = req.body.ip;
    if (clientIp) {
        console.log(`Client IP received: ${clientIp}`);
        res.status(200).send('IP received successfully');
    } else {
        res.status(400).send('No IP received');
    }
});
// New API route to send "talha" to the frontend
app.get('/api/send-name', (req, res) => {
    res.status(200).json({ name: 'talha' });
});
// Serve React front-end
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});

