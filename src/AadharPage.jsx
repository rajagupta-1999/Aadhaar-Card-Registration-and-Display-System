import React from 'react';
import { useLocation } from 'react-router-dom';
import AadharCard from './AadharCard';

const AadharCardPage = () => {
    const location = useLocation();
    const { user } = location.state || {};

    console.log('User Data on Aadhar Page:', user);

    return (
        <div>
            {user ? (
                <AadharCard user={user} />
            ) : (
                <p>No user data available.</p>
            )}
        </div>
    );
};

export default AadharCardPage;
