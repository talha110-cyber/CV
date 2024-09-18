// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';  // Import the new Homepage component

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Homepage />} />  {/* Route for Homepage */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
