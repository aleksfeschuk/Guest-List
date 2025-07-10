import { FormEvent } from 'react';

interface GuestFormProps {
    addGuest: (name: string) => void;
    clearAll: () => void;
}

export default GuestForm;