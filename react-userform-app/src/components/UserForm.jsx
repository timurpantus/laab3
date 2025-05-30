import React, { useState } from 'react';
import './UserForm.css';

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        groupCode: '',
        email: ''
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
        setFormData({
            name: '',
            surname: '',
            groupCode: '',
            email: ''
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Surname:</label>
                    <input
                        type="text"
                        name="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Group Code:</label>
                    <input
                        type="text"
                        name="groupCode"
                        value={formData.groupCode}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {submittedData && (
                <div>
                    <h2>Submitted Data:</h2>
                    <ul>
                        <li>Name: {submittedData.name}</li>
                        <li>Surname: {submittedData.surname}</li>
                        <li>Group Code: {submittedData.groupCode}</li>
                        <li>Email: {submittedData.email}</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UserForm;