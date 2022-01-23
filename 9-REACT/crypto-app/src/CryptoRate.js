import './CryptoRate.css'

function CryptoRate(props) {
    return (
        <div className="CryptoRate">
            <p>Last rate: <span className={"amount " + props.cssClass}>{props.lastRate}</span> <span>{props.htmlArrow}</span> <span>{props.currency}</span> <span>{props.symbol}</span></p>
        </div>
    );
}

export default CryptoRate;