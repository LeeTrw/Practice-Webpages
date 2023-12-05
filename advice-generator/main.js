const endpoint = 'https://api.adviceslip.com/advice';

function extract() {

    const adviceId = document.querySelector('.number');
    const adviceQuote = document.querySelector('.advice');

    fetch(endpoint)
        .then(rawData => rawData.json())
        .then(data => {
            adviceId.innerHTML = data.slip.id;
            adviceQuote.innerHTML = data.slip.advice;
        })
}

const dice = document.querySelector('.dice');

dice.addEventListener('click', extract);

