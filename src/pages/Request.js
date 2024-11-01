import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Request() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all?fields=name")
            .then((response) => setData(response.data))
            .catch((error) => setError(error.message));
    }, []);


    return (
        <div>
            <h1>Dados da API</h1>
            {error && <p>{error}</p>}
            <ul>
                {data.map((pais) => (<li key={pais.name.common}>{pais.name.common}</li>))}
            </ul>
        </div>
    );
}

export default Request;