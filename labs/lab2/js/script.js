const students = [
    ["Saksham", [85, 90, 78, 92]],
    ["Ravi", [88, 76, null, 95]],
    ["Sam", [70, 85, 89, null]],
    ["Donna", [95, 98, 99, 100]],
    ["Eve", [80, 82, 85, 88]],
    ["Frank", [92, 87, 90, 85]],
    ["Grace", [78, 75, 80, 82]],
    ["Hank", [85, 88, 90, 87]]
];

function getLetterGrade(avg) {
    if (avg >= 90) return "A+";
    if (avg >= 85) return "A";
    if (avg >= 80) return "A-";
    if (avg >= 77) return "B+";
    if (avg >= 73) return "B";
    if (avg >= 70) return "B-";
    if (avg >= 65) return "C+";
    if (avg >= 60) return "C";
    if (avg >= 55) return "C-";
    if (avg >= 50) return "D";
    return "F";
}

function calculateAverage(grades) {
    const validGrades = grades.filter(grade => grade !== null); 
    let sum = 0;
    for (let i = 0; i < validGrades.length; i++) {
        sum += validGrades[i];
    }
    if (validGrades.length > 0) {
        return Math.round(sum / validGrades.length);
    } else {
        return 0;
    }
}

function generateTable() {
    const tableBody = document.getElementById("gradeTable");
    students.forEach(student => {
        const name = student[0];  
        const grades = student[1]; 
        const avg = calculateAverage(grades);
        let row = `<tr>
            <td><a href="student.html?name=${name}">${name}</a></td>`;
        
        for (let i = 0; i < grades.length; i++) {
            if (grades[i] !== null) {
                row += `<td>${grades[i]}</td>`;
            } else {
                row += `<td></td>`;
            }
        }
        row += `<td>${avg}</td>
            <td>${getLetterGrade(avg)}</td>
        </tr>`;
        tableBody.innerHTML += row;
        console.log(`${name}: ${grades} | Avg: ${avg} | Letter: ${getLetterGrade(avg)}`);
    });
}

window.onload = generateTable;
