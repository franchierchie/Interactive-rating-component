const container = document.querySelectorAll('.container');
const rating = document.querySelectorAll('.number');
const submit = document.querySelector('.submit-button');
const rated = document.querySelector('#rate');

container[1].hidden = true;

submit.addEventListener('click', () => {
    container[1].hidden = false;
    container[0].hidden = true;
});

rating.forEach(rate => {
    rate.addEventListener('click', () => {
        rated.innerHTML = rate.innerHTML;
    });
});