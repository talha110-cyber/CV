const express = require('express');
const path = require('path');
const cors = require('cors');
const geoip = require('geoip-lite');  // Add for IP geolocation
const useragent = require('express-useragent');  // Add for enhanced user-agent parsing
const session = require('express-session');  // For session tracking
const fs = require('fs');  // File system for logging
const morgan = require('morgan');  // HTTP request logger
const app = express();

app.use(cors());  // Enable CORS

// Use user-agent parser middleware to track more device details
app.use(useragent.express());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Setup session management
app.use((req, res, next) => {
    console.log('Request received from IP:', req.connection.remoteAddress);  // Add this line

    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const geo = geoip.lookup(ip) || {};
    const userAgent = req.useragent;

    const logData = {
        timestamp: new Date().toISOString(),
        ip: ip,
        geoLocation: geo,
        userAgent: {
            browser: userAgent.browser,
            version: userAgent.version,
            os: userAgent.os,
            platform: userAgent.platform,
            isMobile: userAgent.isMobile
        },
        sessionID: req.sessionID
    };

    fs.appendFile('detailedAccess.log', JSON.stringify(logData) + '\n', (err) => {
        if (err) throw err;
    });

    next();
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

