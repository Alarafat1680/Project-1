function validateForm() {
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let reEmail = document.getElementById("reEmail").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!firstName || !lastName || !email || !reEmail || !password) {
        alert("All fields are required!");
        return false;
    }

    if (email !== reEmail) {
        alert("Emails do not match!");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return false;
    }

    return confirm("Are you sure you want to submit?");
}
