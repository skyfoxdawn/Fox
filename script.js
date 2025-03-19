function checkPassword() {
    var password = document.getElementById("password").value;
    var correctPassword = "securepass"; // Change this password as needed
    if (password === correctPassword) {
        document.getElementById("screenplay-content").style.display = "block";
    } else {
        alert("Incorrect password. Try again.");
    }
}
