import './ButtonsPanel.css'

function ButtonsPanel(props) {
    return (
        <div className="ButtonsPanel">
            <button onClick={props.addBtnClickEvent}>Add <span>{props.step}</span></button>
            <button onClick={props.reinitBtnClickEvent}>Reinit</button>
            <button onClick={props.resetBtnClickEvent}>Reset</button>
        </div>
    );
}

export default ButtonsPanel;