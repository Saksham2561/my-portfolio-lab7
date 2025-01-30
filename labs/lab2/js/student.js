const studentsList = [
    ["Saksham", [[85, 88, 90], [78, 80], [92, 88]]],
    ["Ravi", [[80, 76,], [, 85], [95, 90]]],
    ["Sam", [[70, 75, 80], [,78], [, 85]]]
];

function findStudentByName(name) {
    for (let i = 0; i < studentsList.length; i++) {
        if (studentsList[i][0] === name) {
            return studentsList[i];
        }
    }
    return null;
}

function computeWeightedAverage(assignments, quizzes, exams) {
    const weights = [0.3, 0.2, 0.5]; 
    const gradeCategories = [assignments, quizzes, exams];
    let weightedTotal = 0;
    let totalWeight = 0;

    for (let i = 0; i < gradeCategories.length; i++) {
        const validScores = gradeCategories[i].filter(score => score !== null);
        if (validScores.length > 0) {
            const averageScore = validScores.reduce((acc, curr) => acc + curr, 0) / validScores.length;
            weightedTotal += averageScore * weights[i];
            totalWeight += weights[i];
        }
    }

    return totalWeight > 0 ? Math.round(weightedTotal / totalWeight) : "";
}

function showStudentDetails() {
    const params = new URLSearchParams(window.location.search);
    const studentName = params.get("name");
    const student = findStudentByName(studentName);

    if (!student) {
        document.getElementById("studentInfo").innerHTML = `<p>Student not found.</p>`;
        return;
    }

    const [assignments, quizzes, exams] = student[1];

    const assignmentsAvg = computeWeightedAverage(assignments, [], []);
    const quizzesAvg = computeWeightedAverage([], quizzes, []);
    const examsAvg = computeWeightedAverage([], [], exams);
    const overallAvg = computeWeightedAverage(assignments, quizzes, exams);

    const infoHTML = `
    <h2>${studentName}'s Performance Summary</h2>
    <table border="1" cellspacing="0" cellpadding="5">
        <thead>
            <tr style="background-color: #f2f2f2;">
                <th>Type of Assessment</th>
                <th>Grades</th>
                <th>Weighted Average</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Assignments</td>
                <td>${assignments.map(grade => grade !== null ? grade : "N/A").reduce((acc, curr) => acc + ", " + curr)}</td>
                <td>${assignmentsAvg}</td>
            </tr>
            <tr>
                <td>Quizzes</td>
                <td>${quizzes.map(grade => grade !== null ? grade : "N/A").reduce((acc, curr) => acc + ", " + curr)}</td>
                <td>${quizzesAvg}</td>
            </tr>
            <tr>
                <td>Exams</td>
                <td>${exams.map(grade => grade !== null ? grade : "N/A").reduce((acc, curr) => acc + ", " + curr)}</td>
                <td>${examsAvg}</td>
            </tr>
            <tr style="font-weight: bold;">
                <td>Overall Average</td>
                <td colspan="2">${overallAvg}</td>
            </tr>
        </tbody>
    </table>
`;


    document.getElementById("studentInfo").innerHTML = infoHTML;

    console.log(`Student: ${studentName}`);
    console.log(`Assignments: ${assignments}`);
    console.log(`Quizzes: ${quizzes}`);
    console.log(`Exams: ${exams}`);
    console.log(`Overall Average: ${overallAvg}`);
}

window.onload = showStudentDetails;
