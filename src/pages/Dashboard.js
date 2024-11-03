import React from 'react';
import ResusableButton from '../components/ReusableButton';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    
    const navigate = useNavigate();

    //função que consegue levar apenas para uma rota do próprio sistema
    const goToLink = (route) => {
        navigate(route);
    }

    //função que confere se é um link externo ou é uma rota interna do sistema, e transfere para o certo
    const goToDestination = (destination) => {
        if(destination.startsWith("http"))
        {
            window.open(destination, "_blank");
        }
        else
        {
            navigate(destination);
        }
    }
    
    return (
        <div>
            <ResusableButton onPress={() => goToLink('/learnreact')} title='Leva para Rota'/><br></br>
            <ResusableButton onPress={() => goToDestination('https://youtube.com')} title='Leva para Youtube'/><br></br>
            <button onClick={() => goToDestination('/requisitions')}>Requisições</button>
        </div>
    );
}

export default Dashboard;