let employees = [];

function addEmployee() {
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const salary = document.getElementById('salary').value;
   

    if (name && position && salary) {
        const employee = {
            id: Date.now(),
            name,
            position,
            salary
        };

        employees.push(employee);
        displayEmployees();
        clearForm();
    } else {
        alert('Please fill in all fields.');
    }
}

function displayEmployees() {
    const employeeTableBody = document.getElementById('employeeTableBody');
    employeeTableBody.innerHTML = '';

    employees.forEach(employee => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.position}</td>
            <td>${employee.salary}</td>
            <td>
                <button onclick="editEmployee(${employee.id})">Edit</button>
                <button onclick="deleteEmployee(${employee.id})">Delete</button>
            </td>
        `;

        employeeTableBody.appendChild(row);
    });
}

function editEmployee(id) {
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        document.getElementById('name').value = employee.name;
        document.getElementById('position').value = employee.position;
        document.getElementById('salary').value = employee.salary;
        deleteEmployee(id);
    }
}

function deleteEmployee(id) {
       // Create a new array to store employees without the one to delete
       var updatedEmployees = [];

       // Iterate through the employees array
       for (var i = 0; i < employees.length; i++) {
           // Check if the current employee's id matches the id to delete
           if (employees[i].id !== id) {
               // If ids don't match, add this employee to the updated array
               updatedEmployees.push(employees[i]);
           }
       }
   
       // Update the employees array with the updated array (without the deleted employee)
       employees = updatedEmployees;

    // employees = employees.filter(emp => emp.id !== id);
    displayEmployees();
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('position').value = '';
    document.getElementById('salary').value = '';
}
