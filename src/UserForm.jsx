import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserForm.css';
import generateUID from './Utils/uidGenerator';
import AadharCard from './AadharCard';

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        fatherName: '',
        dateOfBirth: '',
        address: '',
        locality: '',
        pinCode: '',
        state: '',
        contact: ''
    });
    const [submittedData, setSubmittedData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const uid = generateUID();
        const userData = { ...formData, uid };

        console.log('User Data Submitted: ', userData);

        if (userData.name && userData.fatherName) {
            setSubmittedData(userData);
            setIsModalOpen(true);

            navigate('/aadhar', { state: { user: userData } });
        } else {
            console.error("User data is incomplete");
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <form className="user-form" onSubmit={handleSubmit}>
                <h2>Aadhaar Card Registration</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        placeholder='Please Enter Name'
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fatherName">Father’s Name:</label>
                    <input
                        type="text"
                        placeholder='Please Enter Father’s Name'
                        id="fatherName"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="dateOfBirth">Date of Birth:</label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Full Address:</label>
                    <textarea
                        id="address"
                        placeholder='Please Enter Full Address'
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="locality">Locality:</label>
                    <input
                        type="text"
                        placeholder='Please Enter Locality'
                        id="locality"
                        name="locality"
                        value={formData.locality}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pinCode">Pin Code:</label>
                    <input
                        type="text"
                        placeholder='Please Enter Pin Code'
                        id="pinCode"
                        name="pinCode"
                        maxLength={6}
                        value={formData.pinCode}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State:</label>
                    <input
                        type="text"
                        placeholder='Please Enter State'
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="contact">Contact Details:</label>
                    <input
                        type="text"
                        placeholder='Please Enter Contact Details'
                        id="contact"
                        name="contact"
                        maxLength={10}
                        value={formData.contact}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

            {submittedData && (
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <AadharCard user={submittedData} />
                </Modal>
            )}
        </div>
    );
};

export default UserForm;
