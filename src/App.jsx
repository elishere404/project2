import React from 'react';
import './App.css'; 
import Card from './components/Card.jsx';

function App() {
  return (
    <div className="card-container">
      <Card 
        name="Origami Kitty" 
        description="Kitties are very cute in fact, super " 
        price={1.00} 
        quantity={10} 
        color="#f9f9f9"
        photo="https://cdn.dribbble.com/users/374672/screenshots/4016181/media/f8722787e4cb396b60416cab0ad55ce6.gif" 
      />
      <Card 
        name="Origami Dog" 
        description="Very Cute German Shepherd" 
        price={49.99} 
        quantity={5} 
        color="#e0f7fa"
        photo="https://framerusercontent.com/images/DOV53xU8U2YJmN7i5RMFQ0MdqE.jpg" 
      />
      <Card 
        name="Origami Swan" 
        description="Swans " 
        price={99.99} 
        quantity={2} 
        color="#fff3e0"
        photo="https://origami.guide/wp-content/uploads/2018/04/origami-swan-tutorial-00.jpg" 
      />
    </div>
  );
}

export default App;
