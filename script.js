function age() {
    let day = parseInt(document.getElementById('date').value);
    let month = parseInt(document.getElementById('Month').value);
    let year = parseInt(document.getElementById('Year').value);

    if (isNaN(day) || isNaN(month) || isNaN(year) || day <= 0 || month <= 0 || month > 12 || year <= 0) {
        document.getElementById('age').innerText = "Please enter a valid date.";
        return;
    }

    let today = new Date();
    let birthDate = new Date(year, month - 1, day);

    if (birthDate > today) {
        document.getElementById('age').innerText = "Birth date cannot be in the future!";
        return;
    }

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += prevMonth.getDate();
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById('age').innerText = `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
}
