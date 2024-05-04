let averageGrade = 90;

function getPerformanceLevel(grade) {
    if (grade < 60) return "Незадовільно";
    if (grade <= 70) return "Задовільно";
    if (grade <= 80) return "Добре";
    if (grade <= 90) return "Дуже добре";
    if (grade <= 100) return "Відмінно";
    return "Невизначено"; // Для оцінок поза діапазоном 0-100
}

// switch/case method
switch (getPerformanceLevel(averageGrade)) {
    case "Незадовільно":
        console.log("Незадовільно");
        break;
    case "Задовільно":
        console.log("Задовільно");
        break;
    case "Добре":
        console.log("Добре");
        break;
    case "Дуже добре":
        console.log("Дуже добре");
        break;
    case "Відмінно":
        console.log("Відмінно");
        break;
    default:
        console.log("Неправильно введена оцінка");
}