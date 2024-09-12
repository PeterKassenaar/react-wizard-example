import React from 'react';
import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";
import Step3 from "../Step3/Step3";

const Wizard = () => {
    // The steps in our wizard. Initial step is Step 1.
    const [step, setStep] = React.useState(1);

    // Form data in the wizard
    const [formData, setFormData] = React.useState({});

    const handleChange = (event) => {
        // use destructuring to get the name and value for the current field from the event.
        const {name, value} = event.target;
        // Store or update the form data in the state and pass it on to the wizard steps
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = () => {
        alert('Form submitted!\n' + JSON.stringify(formData));
        console.log('Form Data Submitted:', formData);
        // Here you would typically send formData to a backend or another process
    };

    //******************
    // Go to next step in Wizard (if available)
    const nextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    }
    // Go to previous step in Wizard (if available)
    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    }

    // Render the current step in the Wizard component
    const renderStep = () => {
        switch (step) {
            case 1: {
                return <Step1 formData={formData} handleChange={handleChange} />;
            }
            case 2: {
                return <Step2 formData={formData} handleChange={handleChange}/>;
            }
            case 3: {
                return <Step3 formData={formData} handleChange={handleChange}/>;
            }
            default: {
                return <Step1 formData={formData} handleChange={handleChange}/>;
            }
        }
    }

    // Render UI
    return (
        <div>
            <h1>Wizard component</h1>
            <div>We now added a simple form to the wizard. Every step has one form field to be filled in.</div>
            {renderStep()}
            {/*Render the buttons for the wizard. Of course these can be in their own component.
             In that case, remember to pass the methods to the buttons. */}
            <div>
                {step > 1 &&
                    <button className="btn bg-info float-start"
                            onClick={prevStep}>Previous</button>
                }
                {step < 3 &&
                    <button className="btn bg-info float-end"
                        onClick={nextStep}>Next</button>
                }
                {step === 3 &&
                    <button className="btn bg-primary float-end"
                            onClick={handleSubmit}>Submit!</button>
                }
            </div>
        </div>
    );
};

export default Wizard;
