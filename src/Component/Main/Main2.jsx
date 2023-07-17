import React, {useEffect, useState} from 'react'
import axios from "axios";
import BearList from "../BearList/BearList";
import Form from "../Form/Form";

const BASE_URL = process.env.REACT_APP_PUNK_BASE_URL;

const Main = () => {

    // For Lifting up State
    const [filterBear, setFilterBear] = useState({
        abv_gt: "",
        ids: "",
        beer_name: "",
    })

    const [bear, setBear] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {

        const controller = new AbortController();
        const urlParams = new URLSearchParams();
        if (filterBear.abv_gt.length > 0) {
            urlParams.append('abv_gt', filterBear.abv_gt);
        }
        if (filterBear.beer_name.length > 0) {
            urlParams.append('beer_name', filterBear.beer_name);
        }
        if (filterBear.ids.length > 0) {
            urlParams.append('ids', filterBear.ids);
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

    }, [filterBear]);
    return (
        <>
            <Form  {...filterBear}  setFilterBear={setFilterBear}/>
            <BearList bear={bear} isLoading={isLoading}/>
        </>
    )
}

export default Main
