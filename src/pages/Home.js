import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

  //CRIAR ROTAS
  //CRIAR REUSABLEBUTTON DENTRO DO RETURN QUE CHAME UMA DESSAS ROTAS


  // Atribui as funcionalidades de useNavigate para dentro de um objeto
  const navigate = useNavigate();

  // É uma função, que faz a ação de navegar para um rota específica
  const goToDashboard = () => {
    navigate('/dashboard');
  }

  const goToLearReact = () => {
    navigate('/learnreact');
  }

  return(
    <div>
      <button onClick={goToDashboard}>Dashboard</button>
      <button onClick={goToLearReact}>LearReact</button>
    </div>
  );
}

export default Home;