import React, { useContext } from 'react';
import CardList from './CardList';
import { UserContext } from '../context/GameContext.js';

export default function Player({ player, hand }) {
  const { setTo, setFrom, setSelectedCard, selectedCard, to } = useContext(UserContext);
  return (
    <div
      className={`player ${to === player ? 'selected-player' : ''}`}
      onClick={() => setTo(player)}
    >
      <p>Player {player}</p>
      <CardList
        player={player}
        cards={hand}
        setFrom={setFrom}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
      />
    </div>
  );
}
