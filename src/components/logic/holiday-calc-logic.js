export const holPay = (props) => {
    const holPerWeek = (props.totalHol / 52);
    //Total amount of holiday available to employee
    const availableHol = ((((holPerWeek * props.weeksEmployed).toFixed(2)) / 5) * props.daysWorked).toFixed(2);
    //Holiday remaining for time employed
    const remainingHol = (availableHol - props.holTaken).toFixed(2);
    //Total amount earned by employee before tax
    const totalEarnt = props.payRate * props.weeksEmployed;
    //Total amount of holiday owed to the employee
    const totalHolOwed = ((totalEarnt / 100 * props.rate)).toFixed(2);
    //Total money owed to employee for holiday not used
    const moneyOwed = ((totalHolOwed / availableHol) * (availableHol - props.holTaken)).toFixed(2);

    return {
        moneyOwed : moneyOwed,
        holDaysOwed : (totalHolOwed / 100).toFixed(1),
        holDaysRemaining : remainingHol,
        totalPay : totalEarnt
    }
}