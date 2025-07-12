<!DOCTYPE html>
<html lang="en">
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Dashboard</title>
     <link rel="stylesheet" href="../static/css/form.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="app-container">
        <div class="form-container">
            <a href="dashboard.html" class="back-link">← Back to Dashboard</a>
            <h1>Add Employee</h1>
            <label for="name" class="first-name">First name</label>
            <input type="text" id="name" class="first-name-box"/>
            <label for="lastName" class="last-name">Last Name</label>
            <input type="text" id="name" class="last-name-box"/>
            <!-- ...existing code... -->
            <div class="email-department-container">
            <div class="email-container">
                <label for="email" class="email">Email</label>
                <input type="email" id="email" class="email-box"/>
            </div>
            <div class="department-container">
                <label for="department" class="department">Department</label>
                <select id="department" class="department-box">
                    <option value="">Select Department</option>
                    <option value="HR">HR</option>
                    <option value="IT">IT</option>
                    <option value="Finance">Finance</option>
                    <option value="Marketing">Marketing</option>
                </select>
            </div>
            </div>
            <label for="Role" class="role">Role</label>
            <select id="role" class="role-box">
                <option value="">Select Role</option>
                <option value="Manager">Manager</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="Analyst">Analyst</option>
            </select>
            <div class="button-container-form">
                <button class="cancel-button">Cancel</button>
                <button class="submit-button">Submit</button>
            </div>
        </div>
    </div>
     <script src="../static/js/form.js"></script>
</body>
</html>