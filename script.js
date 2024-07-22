function addStudent() {
    // Get the form values
    const studentId = document.getElementById('studentId').value;
    const studentName = document.getElementById('studentName').value;
    const studentAge = document.getElementById('studentAge').value;
    const studentGrade = document.getElementById('studentGrade').value;

    // Create a new row and cells
    const table = document.getElementById('studentTableBody');
    const newRow = table.insertRow();

    const idCell = newRow.insertCell(0);
    const nameCell = newRow.insertCell(1);
    const ageCell = newRow.insertCell(2);
    const gradeCell = newRow.insertCell(3);

    // Add the values to the cells
    idCell.textContent = studentId;
    nameCell.textContent = studentName;
    ageCell.textContent = studentAge;
}