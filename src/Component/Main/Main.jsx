import React, {useEffect, useState} from 'react'
import axios from "axios";
import BearList from "../BearList/BearList";
import Form from "../Form/Form";

const BASE_URL = process.env.REACT_APP_PUNK_BASE_URL;

const Main = () => {

    // For Lifting up State
    const [bearName, setBearName] = useState("");
    const [bearAbv, setBearAbv] = useState("");
    const [bearId, setBearId] = useState("");

    const [bear, setBear] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {

        const controller = new AbortController();
        const urlParams = new URLSearchParams();
        if (bearAbv.length > 0) {
            urlParams.append('abv_gt', bearAbv);
        }
        if (bearName.length > 0) {
            urlParams.append('beer_name', bearName);
        }
        if (bearId.length > 0) {
            urlParams.append('ids', bearId);
        }



        async function fetchBears() {
            try {
                setIsLoading(true)
                const response = await axios.get(BASE_URL + "?" + urlParams.toString())
                if (!response === 200) throw new Error("Failed to fetch the API data");
                const data = await response;
                setBear(data.data)

            } catch (error) {
                if (error.name !== "AbortError") {
                }
            } finally {
                setIsLoading(false)
            }

        }

        fetchBears();
        return (() => {
            controller.abort();
        })

    }, [bearName, bearId, bearAbv]);
    return (
        <>
            <Form bearName={bearName} bearId={bearId} bearAbv={bearAbv} setBearId={setBearId} setBearName={setBearName} bearABV={bearAbv}
                  setBearAbv={setBearAbv}/>
            <BearList bear={bear} isLoading={isLoading}/>
        </>
    )
}

export default Main
