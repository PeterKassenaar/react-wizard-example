import React from 'react';
import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";
import Step3 from "../Step3/Step3";

const Wizard = () => {
    const [step, setStep] = React.useState(1);
    const nextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    }
    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    }

    const renderStep = () => {
        switch (step) {
            case 1: {
                return <Step1/>;
            }
            case 2: {
                return <Step2/>;
            }
            case 3: {
                return <Step3/>;
            }
            default: {
                return <Step1/>;
            }
        }
    }

    // Render UI
    return (
        <div>
            <h1>Wizard component</h1>
            {renderStep()}
            <div>
                {step > 1 &&
                    <button className="btn bg-info float-start"
                            onClick={prevStep}>Previous</button>
                }
                {step < 3 &&
                    <button className="btn bg-info float-end"
                        onClick={nextStep}>Next</button>
                }
            </div>
        </div>
    );
};

export default Wizard;
