import { minTwoDigits } from "../helpers/two-digits";

export const timeCalc = (props) => {
    let h = props.reduce((a, b) => (a + b.hours), 0)
    let m = props.reduce((a, b) => (a + b.minutes), 0)
    let s = props.reduce((a, b) => (a + b.seconds), 0)

    //Checks if total seconds are more than 60, if yes adds a minute and removes 60 secs >= 60) {
    if (s >= 60) {
        m += Math.floor(s / 60)
        s = (s % 60)
    }

    //Checks if total minutes are more than 60, if yes adds an hour and removes 60 minutes  
    if (m >= 60) {
        h += Math.floor(m / 60)
        m = (m % 60)
    }

    return minTwoDigits(h) + ' : ' + minTwoDigits(m) + ' : ' + minTwoDigits(s)
}