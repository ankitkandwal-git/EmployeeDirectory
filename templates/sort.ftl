<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Dashboard</title>
     <link rel="stylesheet" href="../static/css/sort.css">
</head>
<body>
    <div class="filter-sidebar">
        <a href="dashboard.html" class="back-link">← Back to Dashboard</a>
    <h2>Filter Employees</h2>
    <label for="filterFirstName">First Name</label>
    <input type="text" id="filterFirstName" class="filter-input" placeholder="Enter first name">

    <label for="filterDepartment">Department</label>
    <select id="filterDepartment" class="filter-select">
        <option value="">All Departments</option>
        <option value="HR">HR</option>
        <option value="IT">IT</option>
        <option value="Finance">Finance</option>
        <option value="Marketing">Marketing</option>
    </select>

    <label for="filterRole">Role</label>
    <select id="filterRole" class="filter-select">
        <option value="">All Roles</option>
        <option value="Manager">Manager</option>
        <option value="Developer">Developer</option>
        <option value="Designer">Designer</option>
        <option value="Analyst">Analyst</option>
    </select>

    <button class="apply-filter-button">Apply Filter</button>
</div>
<script src="../static/js/sort.js"></script>
</body>
</html>