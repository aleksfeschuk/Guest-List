document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-guest-form');
    const guestList = document.getElementById('guest-list');
    const guestNameInput = document.getElementById('guest-name');
    const confirmedCount = document.getElementById('confirmed-count');
    const clearAllButton = document.getElementById('clear-all');

    let guests = JSON.parse(localStorage.getItem('guestList')) || [];
    renderGuests();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = guestNameInput.value.trim();
        console.log('Form submitted, name:', guestNameInput.value.trim()); // Debug
        if (name) {
            guests.push({ name, confirmed: false });
            guests.sort((a, b) => a.name.localeCompare(b.name));
            saveGuests();
            renderGuests();
            guestNameInput.value = ''
        }
    });

    clearAllButton.addEventListener('click', () => {
        guests = [];
        saveGuests();
        renderGuests();
    });

    function saveGuests() {
        localStorage.setItem('guestList', JSON.stringify(guests));
    }

    function renderGuests() {
        console.log('Rendering guests:', guests);
        guestList.innerHTML = '';
        let confirmed = 0;
        guests.forEach((guest, index) => {
            const guestItem = document.createElement('div');
            guestItem.className = `guest-item ${guest.confirmed ? 'confirmed' : ''}`;
            guestItem.innerHTML = `
                <span class="name">${guest.name}</span>
                <button class="btn confirm ${guest.confirmed ? 'confirmed' : ''}" data-index="${index}">
                    ${guest.confirmed ? 'Confirmed' : 'Confirm'}
                </button>
                <button class="btn remove" data-index="${index}">Remove</button>
            
            `;
            guestList.appendChild(guestItem);
            if (guest.confirmed)  {
                confirmed++;
            }
        });
        confirmedCount.textContent = confirmed;
    }

    guestList.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        if (e.target.classList.contains('confirm')) {
            guests[index].confirmed = !guests[index].confirmed;
            saveGuests();
            renderGuests();
        } else if (e.target .classList.contains('remove')) {
            guests.splice(index, 1);
            saveGuests();
            renderGuests();
        }
    })
});