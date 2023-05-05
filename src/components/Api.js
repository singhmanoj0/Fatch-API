import React, { useEffect, useState } from 'react';
import axios from "axios";
import Home from './Home';
import './Api.css'
import Loader from './Loader';


function Api() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true)

    const fetchCoinsData = async () => {

        try {
            const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=100");
            setCoins(data);
            setLoading(false)
        } catch (error) {
            alert("Page is NOt Working")
            console.error(error)
        }

    }

    useEffect(() => {
        fetchCoinsData();  //function call
    }, []);

    return (
        <div className='login_coin'>

            {
                loading ? <Loader /> : coins.map((props) => (  //if loading is true the loader component is called ortherwise sinup bala component is called

                    <Home name={props.name} symbol={props.symbol} key={props.id} imgSrc={props.image} price={props.current_price} />

                ))
            }
            {/* {coins.map((props) => (

                <Signup name={props.name} symbol={props.symbol} key={props.id} imgSrc={props.image} price={props.current_price} />

            ))} */}

        </div>
    )
}

export default Api
