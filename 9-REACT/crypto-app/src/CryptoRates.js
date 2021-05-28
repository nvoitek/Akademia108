import CryptoRate from "./CryptoRate";

function CryptoRates(props) {
    return (
        props.cryptoRates.map((item, idx) => {
            return <CryptoRate key={idx} cssClass={item.cssClass} lastRate={item.lastRate} htmlArrow={item.htmlArrow} currency={item.currency} symbol={item.symbol}/>
        })
    );
}

export default CryptoRates;