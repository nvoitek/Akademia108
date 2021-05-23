import './Display.css'

function Display(props) {
    return (
        <p className="Display">
            Licznik: <span>{props.currentValue}</span>
        </p>
    );
}

export default Display;