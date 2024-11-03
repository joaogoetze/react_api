import React from  'react';
import ResusableButton from '../components/ReusableButton';
import { useNavigate } from 'react-router-dom';

function Requisitions() {

    const navigate = useNavigate();

    const goToRoute = (route) => {
        navigate(route);
    }
    
    return(
        <div>
            <ResusableButton onPress={() => goToRoute('\readCars')} title='Read Cars'/>
        </div>
    );
}

export default Requisitions();