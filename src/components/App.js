import Wizard from "./Wizard/Wizard";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";

const App = () => {
    return (
        <div className="container">
           {/*  We now have a wizard with a variable number of steps. They
            are passed to the Wizard component as 'children' */}
           <Wizard>
               <Step1 />
               <Step2 />
               <Step3 />
           </Wizard>
        </div>
    );
}

export default App;
