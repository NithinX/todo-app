module.exports.displayTitle= function() {
    var options = { weekday: 'long', month: 'long', day: 'numeric' };
    var today = new Date();

    var day = today.toLocaleDateString("en-US", options);

    return day;
}

exports.currentDayStatus = function() {
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    if (currentDay === 6 || currentDay === 0) {
        day = "Weekend";
    } else {
        day = "Weekday";
    }
    return day;
}