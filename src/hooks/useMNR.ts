import { useEffect, useState } from "react";

const useMNR = () => {
    const [data, setData] = useState<any[] | null>(null);

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setData(data);
    }

    useEffect(() => {
        fetchData();   
    }, []);

    return data;
};

export default useMNR;