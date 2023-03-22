import React, {useEffect, useState} from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const CoinInfo = ({image, name, symbol}) => {
    const [price, setPrice] = useState(0)

    useEffect(() => {
        const getCoinPrice = async () => {
            const response = await fetch(
                `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=` + API_KEY
            );
            const json = await response.json();
            setPrice(json)
            console.log(price)
        }
        getCoinPrice().catch(console.log);
    }, [symbol]);

    return (
        <div>
            {price ? (
                // rendering only if API call actually returned us data
                <li className="main-list" key={symbol}>
                    <img 
                        className="icons"
                        src={`https://www.cryptocompare.com${image}`} 
                     />
                    {name} <span className="tab"></span> ${price.USD} USD
                </li>
            ) : null}
            <hr />
            
        </div>
    );

}

export default CoinInfo;