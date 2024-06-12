import React from 'react';
import './AadharCard.css';
import image from '../public/Emblem.png'

const AadharCard = ({ user }) => {
    if (!user || !user.name) {
        return <p>No user data available.</p>;
    }

    const {
        name,
        fatherName,
        dateOfBirth,
        address,
        locality,
        pinCode,
        state,
        contact,
        uid
    } = user;

    return (
        <div className="aadhar-card">
            <div className="card-header">
                <img
                    className="emblem"
                    src={image}
                    alt="Emblem"
                />
                <h1>Government of India</h1>
            </div>
            <div className="card-body">
                <div className="card-section">
                    <div className="left-column">
                        <label>Name:</label>
                        <span>{name}</span>
                    </div>
                    <div className="right-column">
                        <label>Father’s Name:</label>
                        <span>{fatherName}</span>
                    </div>
                </div>
                <div className="card-section">
                    <div className="left-column">
                        <label>Date of Birth:</label>
                        <span>{dateOfBirth}</span>
                    </div>
                    <div className="right-column">
                        <label>Contact:</label>
                        <span>{contact}</span>
                    </div>
                </div>
                <div className="card-section">
                    <div>
                        <label>Address:</label>
                        <div>
                            <span>{address}</span>,{" "}<span>{locality}</span>,{" "}<span>{state}</span>{" "}-{" "}<span>{pinCode}</span>

                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ textAlign: "center" }}>
                        <label style={{ fontWeight: 'bolder', marginRight: "1rem", color: "green" }}>UID:</label>
                        <span style={{ fontWeight: 'bolder' }}>{uid.match(/.{1,4}/g).join(' ')}</span>
                    </div>
                    <hr style={{ height: '2px', borderWidth: '0', color: 'red', backgroundColor: 'red' }}></hr>
                    <div style={{ textAlign: "center" }}>
                        <h3>My <span style={{ color: "red" }}>Aadhaar</span> My <span style={{ color: "green" }}>Identity</span></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AadharCard;
