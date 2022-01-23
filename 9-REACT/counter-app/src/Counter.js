import './Counter.css'
import ButtonsPanel from "./ButtonsPanel";
import Display from "./Display";
import Step from "./Step";
import React, { useState } from 'react';

function Counter() {

    const [currentValue, setCurrentValue] = useState(0);
    const [currentStep, setCurrentStep] = useState(1);

    const add = () => {
        setCurrentValue(currentValue + currentStep);
    }

    const reinit = () => {
        setCurrentValue(0);
    }

    const reset = () => {
        reinit();
        setCurrentStep(1);
    }

    const onStep = (e) => {
        setCurrentStep(parseInt(e.target.value));
    }

    return (
        <div className="Counter">
            <Display currentValue={currentValue}/>
            <ButtonsPanel step={currentStep} addBtnClickEvent={add} reinitBtnClickEvent={reinit} resetBtnClickEvent={reset}/>
            <Step currentStep={currentStep} onStep={onStep}/>
        </div>
    );
}

export default Counter;