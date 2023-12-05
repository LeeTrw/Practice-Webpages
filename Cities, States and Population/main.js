const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint) //fetch the data from the url saved in the variable endpoint
    .then(rawData => rawData.json()) //get the raw data and turn in it into json to call the next promise on
    .then(data => cities.push(...data)) //extract raw data and push as a spread into the array ( could also use
                                        // data => cities = data if change const to let)

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}



const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);




const reverseButton = document.querySelector('.reverse');

function reverseArray() {
    const array = findMatches(searchInput.value, cities);
    const arrayReversed = array.reverse();
    const html = arrayReversed.map(place => {
        const regex = new RegExp(searchInput.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${searchInput.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${searchInput.value}</span>`);
        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

reverseButton.addEventListener('click', reverseArray);
