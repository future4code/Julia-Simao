import { useEffect, useState } from "react";
import axios from "axios";

export const useRequestData = (url) => {
    const [data, setData] = useState([])

    
    useEffect(() => {
        axios
        .get(url)
            .then((res) => {
                setData(res.data)
    })
        .catch((err) => {
            console.log(err)
    })
    }, [url])
    
    return [data]

    }

export default useRequestData