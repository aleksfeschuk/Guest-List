import {useState, useEffect} from 'react';
import GuestForm from './components/Guestform';
import GuestList from './components/GuestList';
import './style.css';

interface Guest {
  id: string;
  name: string;
  confirmed: boolean;
}

function App() {
  const [guests, setGuests] = useState<Guest[]>(() => {
    const saved = localStorage.getItem('guestList');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('guestList', JSON.stringify(guests));
  }, [guests]);

  const addGuest = (name: string) => {
    const newGuest = {
      id: crypto.randomUUID(),
      name,
      confirmed: false,
    };
    const newGuests = [...guests, newGuest].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setGuests(newGuests);
  };

  const removeGuest = (id: string) => {
    const newGuests = guests.filter((guest) => guest.id !== id);
    setGuests(newGuests);
  };

  const clearAll = () => {
    setGuests([]);
  };

}


export default App;