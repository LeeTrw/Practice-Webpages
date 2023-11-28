function calculateAge(event) {
    event.preventDefault();

    const dayInput = parseInt(document.getElementById('day').value);
    const monthInput = parseInt(document.getElementById('month').value);
    const yearInput = parseInt(document.getElementById('year').value);

    const daysInMonth = [
        31, (year % 4 === 0 ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 
        ];

    if (isValidDate(dayInput, monthInput, yearInput) === true) {
        console.log('valid date');
    } else {
        console.log('invalid date');
        return false;
    }

    const thisYear = new Date().getFullYear();
    const thisMonth = new Date().getMonth() + 1;
    const thisDate = new Date().getDate();

    const dayOutput = document.getElementById('day-output');
    const monthOutput = document.getElementById('month-output');
    const yearOutput = document.getElementById('year-output');
    const dayWording = document.getElementById('day-wording');
    const monthWording = document.getElementById('month-wording');
    const yearWording = document.getElementById('year-wording');

    let calcDays = 0;
    let minusMonths = 0;
    let calcMonths = 0;
    let minusYears = 0;
    let calcYears = 0;

    
    if ((thisDate - dayInput) === 1) {
        dayOutput.innerHTML = '1';
        dayWording.innerHTML = 'day';
    } else if ((thisDate - dayInput) < 0) {
        minusMonths = 1;
        calcDays = (thisDate + daysInMonth[thisMonth - minusMonths - 1]) - dayInput;
        dayOutput.innerHTML = animateCount(calcDays, 2, 'day-output');
        dayWording.innerHTML = 'days';
    } else {
        dayOutput.innerHTML = animateCount((thisDate - dayInput), 2, 'day-output');
        dayWording.innerHTML = 'days';
    }
   
    calcMonths = monthInput + minusMonths;

    if ((thisMonth - calcMonths) === 1) {
        monthOutput.innerHTML = '1';
        monthWording.innerHTML = 'month';
    } else if ((thisMonth - calcMonths) < 0) {
        minusYears = 1;
        monthOutput.innerHTML = animateCount((thisMonth + 12 - calcMonths), 2, 'month-output');
    } else {
        monthOutput.innerHTML = animateCount((thisMonth - monthInput), 2, 'month-output');
    }

    calcYears = yearInput + minusYears;

    if ((thisYear - calcYears) === 1) {
        yearOutput.innerHTML = '1';
        yearWording.innerHTML = 'year';
    } else {
        yearOutput.innerHTML = animateCount((thisYear - calcYears), 2, 'year-output');
        yearWording.innerHTML = 'years';
    }

    //RAW UNAMINATED COUNTING

    // if ((thisDate - dayInput) === 1) {
    //     dayOutput.innerHTML = '1';
    //     dayWording.innerHTML = 'day';
    // } else if ((thisDate - dayInput) < 0) {
    //     minusMonths = 1;
    //     calcDays = (thisDate + daysInMonth[thisMonth - minusMonths - 1]) - dayInput;
    //     dayOutput.innerHTML = calcDays;
    // } else {
    //     dayOutput.innerHTML = (thisDate - dayInput);
    // }

    // calcMonths = monthInput + minusMonths;

    // if ((thisMonth - calcMonths) === 1) {
    //     monthOutput.innerHTML = '1';
    //     monthWording.innerHTML = 'month';
    // } else if ((thisMonth - calcMonths) < 0) {
    //     minusYears = 1;
    //     monthOutput.innerHTML = (thisMonth + 12 - calcMonths);
    // } else {
    //     monthOutput.innerHTML = (thisMonth - monthInput);
    // }

    // calcYears = yearInput + minusYears;

    // if ((thisYear - calcYears) === 1) {
    //     yearOutput.innerHTML = '1';
    //     yearWording.innerHTML = 'year';
    // } else {
    //     yearOutput.innerHTML = (thisYear - calcYears);
    // }

}


function isValidDate(day, month, year) {

    const dayError = document.querySelector('.day-error');
    const monthError = document.querySelector('.month-error');
    const yearError = document.querySelector('.year-error');

    const dayBox = document.getElementById('day');
    const monthBox = document.getElementById('month');
    const yearBox = document.getElementById('year');

    const currentYear = new Date().getFullYear();

    //Check if the year is in the past
    if(year > currentYear) {
        yearError.innerHTML = 'Must be in the past';
        yearBox.classList.add('error');
        return false;
    } else if (!year) {
        yearError.innerHTML = 'Enter a year';
        yearBox.classList.add('error');
        return false;
    } else {
        yearError.innerHTML = '';
        yearBox.classList.remove('error');
    }

    //Check if a valid month has been entered
    if(month < 1 || month > 12 || !month) {
        monthError.innerHTML = 'Enter a valid month';
        monthBox.classList.add('error');
        return false;
    } else {
        monthBox.classList.remove('error');
        monthError.innerHTML = '';
    }

    //Check the days entered are valid for the entered month
    const daysInMonth = [
        31, // January
        (year % 4 === 0 ? 29 : 28), // February leap years calc
        31, // March
        30, // April
        31, // May
        30, // June
        31, // July
        31, // August
        30, // September
        31, // October
        30, // November
        31, // December
        ];
    
        if (day < 1 || day > daysInMonth[month - 1] || !day) {
        dayError.innerHTML = 'Enter a valid day';
        dayBox.classList.add('error');
        return false; // Day exceeds the maximum days in the month
        } else {
        dayError.innerHTML = '';
        dayBox.classList.remove('error');
        return true; // Valid date
    }
}


function animateCount(end, duration, elementId) {
    const frames = 60; // Number of frames per second
    const framesNeeded = frames * duration; // Total frames needed for the duration
    const increment = end / framesNeeded; // Calculate the increment per frame
    const elementToChange = document.getElementById(elementId);
    let current = 0;
    let frameCount = 0;

    const interval = setInterval(() => {
        if (frameCount >= framesNeeded) {
            clearInterval(interval);
            elementToChange.innerHTML = end;
        } else {
            current += increment;
            elementToChange.innerHTML = Math.round(current); // Round for whole numbers
            frameCount++;
        }
    }, 500 / frames); // Set interval based on frames
}

//TIMING NOT RIGHT

// function animateCount(end, duration, elementId) {
//     const increment = Math.ceil(end / duration);
//     const elementToChange = document.getElementById(elementId);
//     let current = 0;

//     const interval = setInterval(() => {
//         if (current >= end) {
//             clearInterval(interval);
//             elementToChange.innerHTML = end;
//         } else {
//             current += increment;
//             elementToChange.innerHTML = current;
//         }
//     }, 1000);
// }




