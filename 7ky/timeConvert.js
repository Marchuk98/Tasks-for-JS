function timeConvert(num) {
    if (num <= 0) {
        return "00:00";
    } else {
        let hours = Math.floor(num / 60);
        let minutes = num % 60;

        let formattedHours = hours < 10 ? "0" + hours : hours;
        let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

        return formattedHours + ":" + formattedMinutes;
    }
}