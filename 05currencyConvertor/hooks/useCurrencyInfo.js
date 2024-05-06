import {useEffect, useState} from "react" 

function useCurrencyInfo(currency){
    const[deta, setDeta ]= useState({})
    useEffect(() => {
        const url = 'https://currency-converter18.p.rapidapi.com/api/v1/convert?from=EUR&to=KWD&amount=19';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd406ea81b5msh2c2610e3ab3c34fp16e4f7jsn01a749e8d41d',
                'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
            }
        };

        fetch (url, options).then((res)=>res.json()).then((res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
    
}

export default useCurrencyInfo;