function to24hourtime(hour, minute, period) {
    let hour24;

    if(period === "pm" && hour !== 12) {
        hour24 = hour + 12;
    } else if(period === "am" && hour === 12) {
        hour24 = 0;
    } else {
        hour24 = hour;
    }

    let minuteString = minute < 10 ? "0" + minute : minute;

    return `${hour24 < 10 ? "0" : ""}${hour24}${minuteString}`;
}