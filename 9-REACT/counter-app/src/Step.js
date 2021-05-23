import './Step.css'

function Step(props) {
    return (
        <div className="Step">
            <label>Krok: <input type="number" value={props.currentStep} onChange={props.onStep}/></label>
        </div>
    );
}

export default Step;