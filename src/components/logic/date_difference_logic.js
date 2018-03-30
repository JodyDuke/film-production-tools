//Math for making time in ms into days
const _MS_PER_DAY = 1000 * 60 * 60 * 24;


//Function for calculating time between two dates
function dateCalculator(a, b) {
    // Discard the time and time-zone information.
    var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

//Function to format into weeks with decimal point
function dateDiff(a, b) {

    var startDate = new Date(a.val())
    var endDate = new Date(b.val())

    var date = dateCalculator(startDate, endDate);

    var weeks = Math.floor(date / 7);
    var days = date % 7;

    var result = "";

    if (days >= 5) {
        result = weeks += 1;
    }
    else {
        days = ((days / 10) * 2) * 10;
        result = weeks + "." + days;
    }

    return result

}

export default dateDiff
