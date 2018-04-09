import { round } from "../helpers/round.js";

export const dateDiff = (a, b) => {
    let result = 0;
    let startDate = new Date(a);
    let endDate = new Date(b);

    if(startDate <= endDate) {
        while (startDate.toDateString() !== endDate.toDateString()) {

        if (startDate.getDay() > 0 && startDate.getDay() <= 5) {
            result += 0.2
        }

        startDate.setTime(startDate.getTime() + 1 * 86400000)
        }

        if (startDate.getDay() > 0 && startDate.getDay() <= 5) {
            result += 0.2
        }

        return round(result, 1) + ' weeks';

    }

    else {
        console.log('End date must be after start date')
    }   

}

