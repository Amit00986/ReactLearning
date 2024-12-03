import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        if (!currency) return; 

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch currency data");
                }
                return res.json();
            })
            .then((res) => setData(res[currency] || res))
            .catch((error) => console.error("Error fetching currency data:", error));
    }, [currency]);

    useEffect(() => {
        console.log("Updated currency data:", data);
    }, [data]); 

    return data;
}

export default useCurrencyInfo;
