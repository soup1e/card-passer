import { useState, createContext } from 'react';
import initialCards from '../cards-data';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [to, setTo] = useState(1);
  const [from, setFrom] = useState('deck');
  const [deck, setDeck] = useState(initialCards);

  return (
    <UserContext.Provider
      value={{
        to,
        setTo,
        from,
        setFrom,
        selectedCard,
        setSelectedCard,
        playerOneHand,
        setPlayerOneHand,
        playerTwoHand,
        setPlayerTwoHand,
        playerThreeHand,
        setPlayerThreeHand,
        deck,
        setDeck,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
