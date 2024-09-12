import React from 'react';

const Step2 = ({formData, handleChange}) => {
    return (
        <div>
            <h2>Step 2</h2>
            <label htmlFor="email">
                <input type="text"
                       className="form-control-lg"
                       name="email"
                       placeholder="Please enter your email address"
                       value={formData.email || ''}
                       onChange={handleChange}/>
            </label>
        </div>
    );
};

export default Step2;
