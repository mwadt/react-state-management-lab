import { set } from 'mongoose';
import './App.css';
import { useState } from 'react';




const App = () => {
 
const [totalStrength, setTotalStrength] = useState(0);
const [totalAgility, setTotalAgility] = useState(0);
const [team, setTeam] = useState([]);
const [money, setMoney] = useState(100);
const [zombieFighters, setZombieFighters] = useState([
  {
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  },
  ]);

  const handleDeleteFighter = (fighter) => {
    const newTeamArray = team.filter(fighter => teamMember !== fighter);
    setTeam(newTeamArray);
    setMoney(money + fighter.price);
    setTotalStrength(totalStrength - fighter.strength);
    setTotalAgility(totalAgility - fighter.agility);
  }
  const handleAddFighter = (newFighter) => {
    const newTeamArray = [...team, newFighter];
    {newFighter.price > money ? alert('Not enough money') : setTeam(newTeamArray) }
    {newFighter.price < money ?  setMoney(money - newFighter.price) : null }
    // setTeam(newTeamArray);
    // setMoney(money - newFighter.price);
    setTotalStrength(totalStrength + newFighter.strength);
    setTotalAgility(totalAgility + newFighter.agility);
    console.log(team);
  }

  const fighterList = zombieFighters.map((fighter, index) => {
  });

  return (
    <>
    {team.length <= 0 ? <h1>Pick some team members!</h1> : null}
    <h1>Money: {money}</h1>
    

    {team.length > 0 ? (
    <>
    <h1>Your team:</h1>
    <h3>Team strength: {totalStrength}</h3>
    <h3>Team agility: {totalAgility}</h3>
    {team.map((fighter, index) => (
      <div key={index}>
        <ul>
          <li>Name: {fighter.name}</li>
          <li>Price: {fighter.price}</li>
          <li>Str: {fighter.strength}</li>
          <li>Agi: {fighter.agility}</li>
          <img src={fighter.img} />
        </ul>
        <button onClick={() => handleDeleteFighter(fighter)}>Remove from team</button>
      </div>
    ))
    }
    </>
  ) : null}
    <h1>List of zombie Fighters:</h1>
    <div className='fighterList'>
      
        {zombieFighters.map((fighter, index) => (
       
        <div key={index}>
        <ul>
            <li>Name: {fighter.name}</li>
            <li>Price: {fighter.price}</li>
            <li>Str: {fighter.strength}</li>
            <li>Agi: {fighter.agility}</li>
            <img src={fighter.img} />
          </ul>
        <button onClick={() => handleAddFighter(fighter)}>Add to team</button>
        </div>
       

            
        ))}       
        
     
    </div>
  </>
  )
}

export default App;