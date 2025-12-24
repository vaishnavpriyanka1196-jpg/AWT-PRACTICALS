function validateForm() {
    var Fname = document.getElementById("fname").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();

    if (Fname === "" || email === "") {
        alert("Please fill the required fields.");
        return false;
    }

    if (!(email.includes("@"))) {
        alert("Please enter a valid email.");
        return false;
    }

    if (password !== "imca") {
        alert("Incorrect password.");
        return false;
    }

    return true;
}
