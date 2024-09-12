import React from 'react';

const Step3 = ({formData, handleChange}) => {
    return (
        <div>
            <h2>Step 3</h2>
            <label htmlFor="role">
                <input type="text"
                       className="form-control-lg"
                       name="role"
                       placeholder="Please enter your role within the organization"
                       value={formData.role || ''}
                       onChange={handleChange}/>
            </label>
        </div>
    );
};

export default Step3;
