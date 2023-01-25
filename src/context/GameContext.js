import { useState, createContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState();
  const [to, setTo] = useState(1);
  const [from, setFrom] = useState('deck');
  return (
    <UserContext.Provider value={{ to, setTo, from, setFrom, selectedCard, setSelectedCard }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
