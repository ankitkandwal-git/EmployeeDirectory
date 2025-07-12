const mockEmployees = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', department: 'HR', role: 'Manager' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', department: 'IT', role: 'Developer' },
    { id: 3, firstName: 'Alice', lastName: 'Johnson', email: '', department: 'Finance', role: 'Analyst' }
];

function fetchEmployees() {
    const container = document.getElementById("employeeList");
    container.innerHTML = '';

    mockEmployees.forEach(employee => { 
        const employeeDiv = document.createElement("div");
        employeeDiv.className = "employee";
        employeeDiv.innerHTML = `
            <h3>${employee.firstName} ${employee.lastName}</h3>
            <p>Email: ${employee.email}</p>
            <p>Department: ${employee.department}</p>
            <p>Role: ${employee.role}</p>
        `;
        container.appendChild(employeeDiv);
    });

    // Show stored employees (with edit/delete)
    const employees = JSON.parse(localStorage.getItem('employees') || '[]');
    employees.forEach((employee, index) => { 
        const employeeDiv = document.createElement("div");
        employeeDiv.className = "employee";
        employeeDiv.innerHTML = `
            <h3>${employee.firstName} ${employee.lastName}</h3>
            <p>Email: ${employee.email}</p>
            <p>Department: ${employee.department}</p>
            <p>Role: ${employee.role}</p>
            <button class="edit-btn" data-index="${index}">Edit</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        container.appendChild(employeeDiv);
    });

   
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = this.getAttribute('data-index');
            const employee = employees[idx];
            alert(`Edit Employee:\n${employee.firstName} ${employee.lastName}\nEmail: ${employee.email}\nDepartment: ${employee.department}\nRole: ${employee.role}`);
           
        });
    });

    // Delete functionality
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = this.getAttribute('data-index');
            employees.splice(idx, 1);
            localStorage.setItem('employees', JSON.stringify(employees));
            fetchEmployees(); 
        });
    });
}

fetchEmployees();