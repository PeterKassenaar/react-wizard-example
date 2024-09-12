import React from 'react';

const Step1 = ({formData, handleChange}) => {
    return (
        <div>
            <h2>Step 1</h2>
            <label htmlFor="name">
                <input type="text"
                       className="form-control-lg"
                       name="name"
                       placeholder="Please enter your name"
                       value={formData.name || ''}
                       onChange={handleChange} />
            </label>
        </div>
    );
};

export default Step1;
