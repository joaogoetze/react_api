import React, {useEffect, useState} from 'react';
import axios from 'axios';

function ReadCars() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:3200/api/readCars")
            .then((response) => setData(response.data))
            .catch((error) => setError(error.message));
    }, []);


    return (
        <div>
            <h1>Dados da API</h1>
            {error && <p>{error}</p>}
            <ul>
                {data.map((car) => (<li key={car.car_name}>{car.car_name}</li>))}
            </ul>
        </div>
    );
}

export default ReadCars;