const total = document.getElementById('total-input');
const guests = document.getElementById('guests-input');
const percentsEl = document.getElementById('percents-el');
const submitBtn = document.getElementById('submit-btn');
const tipEl = document.getElementById('tip-el');
const percents = [0, .05, .1, .15, .2];

submitBtn.addEventListener('click', () => {
    let tip = total.value * percents[percentsEl.selectedIndex] / guests.value;
    tipEl.textContent = '$' + tip + ' each one';
});