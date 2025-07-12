document.querySelector('.apply-filter-button').addEventListener('click', function() {
    const firstName = document.getElementById('filterFirstName').value.trim();
    const department = document.getElementById('filterDepartment').value;
    const role = document.getElementById('filterRole').value;

    
    localStorage.setItem('employeeFilter', JSON.stringify({
        firstName,
        department,
        role
    }));

    if (window.parent && window.parent !== window) {
        window.parent.document.getElementById('filterModal').style.display = 'none';
        if (window.parent.filterAndSortEmployees) {
            window.parent.filterAndSortEmployees();
        }
    } else {
        window.location.href = "dashboard.html";
    }
});