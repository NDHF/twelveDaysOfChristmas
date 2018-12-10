function howManyItemsInTwelveDaysOfChristmas() {
    let runningTotal = 0;
    for (let i = 1; i <= 12; i ++) {
        let counterForEachDay = 0;
        for (let j = 1; j <= i; j++) {
            counterForEachDay += j;
        }
        runningTotal += counterForEachDay;
    }
    document.getElementById("resultsSpan").innerHTML = "<strong>" + runningTotal + "<strong>";
};

document.addEventListener("DOMContentLoaded", howManyItemsInTwelveDaysOfChristmas);