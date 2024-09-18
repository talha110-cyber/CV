const express = require('express');
const path = require('path');
const cors = require('cors');  // Add this line
const app = express();

app.use(cors());  // Add this line to enable CORS

// Middleware to log IP address of incoming requests
const requestIp = require('request-ip');

app.use(requestIp.mw());

app.use((req, res, next) => {
    console.log(`Client IP: ${req.clientIp}`);
    next();
});
// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Define a simple route
app.get('/api/name', (req, res) => {
    res.json({ name: "junaid" });
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
