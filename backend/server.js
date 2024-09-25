const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors()); // Allows all origins (not recommended for production)

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

// Serve React front-end
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});

