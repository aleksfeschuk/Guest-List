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
        if (name) {
            guests.push({ name, confirmed:false });
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
        guestList.innerHTML = '';
        let confirmed = 0;
    }

});