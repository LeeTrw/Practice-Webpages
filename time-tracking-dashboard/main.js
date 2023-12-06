const titles = document.querySelectorAll('#title');
const daily = document.querySelectorAll('#daily');
const weekly = document.querySelectorAll('#weekly');
const monthly = document.querySelectorAll('#monthly');

const dataArray = [];

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        dataArray.push(...data);
        populate();
    })

    function populate() {
               
        titles.forEach((title, i) => {
            title.innerHTML = dataArray[i].title;
        })

        daily.forEach((dailyDiv, i) => {
            const current = dailyDiv.querySelector('.current');
            const previous = dailyDiv.querySelector('.previous');
            current.innerHTML = dataArray[i].timeframes.daily.current + 'hrs';
            previous.innerHTML = 'Yesterday - ' + dataArray[i].timeframes.daily.previous + 'hrs';
            });
        weekly.forEach((weeklyDiv, i) => {
            const current = weeklyDiv.querySelector('.current');
            const previous = weeklyDiv.querySelector('.previous');
            current.innerHTML = dataArray[i].timeframes.weekly.current + 'hrs';
            previous.innerHTML = 'Last Week - ' + dataArray[i].timeframes.weekly.previous + 'hrs';
            });
        monthly.forEach((monthlyDiv, i) => {
            const current = monthlyDiv.querySelector('.current');
            const previous = monthlyDiv.querySelector('.previous');
            current.innerHTML = dataArray[i].timeframes.monthly.current + 'hrs';
            previous.innerHTML = 'Last Month - ' + dataArray[i].timeframes.monthly.previous + 'hrs';
            });

      }


    const dailyButton = document.querySelector('#daily-button');
    const weeklyButton = document.querySelector('#weekly-button');
    const monthlyButton = document.querySelector('#monthly-button');

    weekly.forEach((weeklyDiv) => {
        weeklyDiv.classList.add('hide');
    })

    monthly.forEach((monthlyDiv) => {
        monthlyDiv.classList.add('hide');
    })

    dailyButton.addEventListener('click', () => toggleView(daily));
    weeklyButton.addEventListener('click', () => toggleView(weekly));
    monthlyButton.addEventListener('click', () => toggleView(monthly));


    function toggleView(select) {

        const views = [daily, weekly, monthly];
        
        views.forEach((view) => {
            if(view == select) {
                select.forEach((div) => {
                    div.classList.remove('hide');
                })
            } else {
                view.forEach((div) => {
                    div.classList.add('hide');
                })
            }
        })
    }