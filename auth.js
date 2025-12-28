function register() {
    const email = regEmail.value;
    const password = regPassword.value;

    if (!email || !password) return alert("Fill all fields");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registered successfully");
    location.href = "login.html";
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) return alert("Invalid credentials");

    localStorage.setItem("currentUser", email);
    localStorage.setItem("isLoggedIn", "true");

    location.href = "index.html";
}

function logout() {
    localStorage.clear();
    location.href = "login.html";
}
function register() {
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    const confirm = document.getElementById("regConfirm").value;

    if (!email || !password || !confirm)
        return alert("Please fill all fields");

    if (password !== confirm)
        return alert("Passwords do not match");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find(u => u.email === email))
        return alert("User already exists");

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    location.href = "login.html";
}
