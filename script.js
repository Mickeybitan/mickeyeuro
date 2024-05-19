function submitGuesses() {
    let franceScore = document.getElementById('france').value;
    let germanyScore = document.getElementById('germany').value;

    if (franceScore === '' || germanyScore === '') {
        alert('אנא מלא את כל הניחושים');
        return;
    }

    alert(`ניחוש התוצאה: צרפת ${franceScore} - ${germanyScore} גרמניה`);
    // כאן ניתן להוסיף לוגיקה לשמירת הניחושים או שליחה לשרת
}
