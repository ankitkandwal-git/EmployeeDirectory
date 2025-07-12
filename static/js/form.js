document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.querySelector(".submit-button");
    const cancelBtn = document.querySelector(".cancel-button");

    submitBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const firstName = document.querySelector(".first-name-box").value;
        const lastName = document.querySelector(".last-name-box").value;
        const email = document.querySelector(".email-box").value;
        const department = document.querySelector(".department-box").value;
        const role = document.querySelector(".role-box").value;

        // Example: log the data
        console.log({
            firstName,
            lastName,
            email,
            department,
            role
        });
        const employees = JSON.parse(localStorage.getItem('employees') || '[]');
            employees.push(employees);
            localStorage.setItem('employees', JSON.stringify(employees));
            window.location.href = "dashboard.html";

        // You can add code here to send data to a server or show a message
        alert("Employee submitted!");
    });

    cancelBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "dashboard.html";
    });
});