import React from 'react';


// This is another approach, where the children of the wizard component are passed in as props.
// The result is functionally (more or less) the same as the branches `step-1` and `step-2`, but
// follows a different design pattern.

const Wizard = ({children}) => {
    // The steps in our wizard. Initial index is Step 1.
    const [index, setIndex] = React.useState(0);

    // We split the children that are coming in as props to an array:
    const steps = React.Children.toArray(children)
    const currentStep = steps[index];

    //******************

    // Go to next index in Wizard (if available)
    const nextStep = () => {
        if (index < steps.length - 1) {
            setIndex(index + 1);
        }
    }

    // Go to previous index in Wizard (if available)
    const prevStep = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    // Render UI
    return (
        <div>
            <h1>Wizard component</h1>
            <div className="content">
                {currentStep}
            </div>
            <hr/>
            <div className="alert bg-light">
                {index > 0 &&
                    <button className="btn bg-info float-start"
                            onClick={prevStep}>Previous</button>
                }
                {index < (steps.length -1) &&
                    <button className="btn bg-info float-end"
                            onClick={nextStep}>Next</button>
                }
            </div>
        </div>
    );
};

export default Wizard;
