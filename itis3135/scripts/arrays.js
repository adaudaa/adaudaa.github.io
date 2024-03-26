let persons = [];
let salaries = [];

window.onload = function() {
  document.getElementById('name').focus();

  document.getElementById('addBtn').addEventListener('click', addSalary);
  document.getElementById('modifyBtn').addEventListener('click', modifySalary);
  document.getElementById('displayResultsBtn').addEventListener('click', displayResults);
  document.getElementById('displaySalaryBtn').addEventListener('click', displaySalary);
};

function addSalary() {
  const name = document.getElementById('name').value;
  const salary = document.getElementById('salary').value;

  if (name.trim() === '') {
    alert('Please enter a name.');
    document.getElementById('name').focus();
    return;
  }

  if (isNaN(salary) || salary.trim() === '') {
    alert('Please enter a valid salary.');
    document.getElementById('salary').focus();
    return;
  }

  persons.push(name);
  salaries.push(parseFloat(salary));

  document.getElementById('name').value = '';
  document.getElementById('salary').value = '';
  document.getElementById('name').focus();

  updateEmployeeSelect();
}

function modifySalary() {
  const selectedIndex = document.getElementById('employeeSelect').selectedIndex;
  const newSalary = document.getElementById('newSalary').value;

  if (selectedIndex === -1) {
    alert('Please select an employee.');
    return;
  }

  if (isNaN(newSalary) || newSalary.trim() === '') {
    alert('Please enter a valid salary.');
    document.getElementById('newSalary').focus();
    return;
  }

  salaries[selectedIndex] = parseFloat(newSalary);
  document.getElementById('newSalary').value = '';
}

function displayResults() {
  const averageSalary = salaries.reduce((sum, salary) => sum + salary, 0) / salaries.length;
  const highestSalary = Math.max(...salaries);

  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
    <h2>Results</h2>
    <p>Average Salary: ${averageSalary.toFixed(2)}</p>
    <p>Highest Salary: ${highestSalary.toFixed(2)}</p>
  `;
}

function displaySalary() {
  const tableBody = document.querySelector('#results_table tbody');
  tableBody.innerHTML = '';

  for (let i = 0; i < persons.length; i++) {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const salaryCell = document.createElement('td');

    nameCell.textContent = persons[i];
    salaryCell.textContent = salaries[i].toFixed(2);

    row.appendChild(nameCell);
    row.appendChild(salaryCell);
    tableBody.appendChild(row);
  }
}

function updateEmployeeSelect() {
  const employeeSelect = document.getElementById('employeeSelect');
  employeeSelect.innerHTML = '';

  for (let i = 0; i < persons.length; i++) {
    const option = document.createElement('option');
    option.textContent = persons[i];
    employeeSelect.appendChild(option);
  }
}