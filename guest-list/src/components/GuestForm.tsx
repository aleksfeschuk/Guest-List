import { FormEvent } from 'react';

interface GuestFormProps {
    addGuest: (name: string) => void;
    clearAll: () => void;
}

function GuestForm({ addGuest, clearAll }: GuestFormProps ) {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = e.currentTarget.querySelector("#guest-name") as HTMLInputElement;
        const name = input.value.trim();
        if (name) {
            addGuest(name);
            input.value = "";
        }
    };

    return ( 
        <div className="add-wrapper">
            <form id="add-guest-form" onSubmit={handleSubmit}>
                <div className="details">
                    <input type="text" id="guest-name" placeholder="Enter guest name" required />
                </div>
                <div className="options">
                    <button type="submit" className="btn add">
                        Add Guest
                    </button>
                    <button type="button" className="btn clear" onClick={clearAll}>
                        Clear All
                    </button>
                </div> 
            </form>
        </div>
    )
}

export default GuestForm;