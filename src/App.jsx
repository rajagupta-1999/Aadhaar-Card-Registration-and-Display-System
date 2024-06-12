import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserForm from './UserForm';
import AadharCardPage from './AadharPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserForm />} />
                <Route path="/aadhar" element={<AadharCardPage />} />
            </Routes>
        </Router>
    );
};

export default App;
