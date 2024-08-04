<?php
session_start();

// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gamer_vault";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to register a new user
function registerUser($conn, $username, $password, $email) {
    // Check if the username or email already exists
    $checkQuery = "SELECT * FROM users WHERE username = ? OR email = ?";
    $stmt = $conn->prepare($checkQuery);
    $stmt->bind_param("ss", $username, $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        return "Username or Email already exists";
    } else {
        // Insert new user into the database
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $insertQuery = "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($insertQuery);
        $stmt->bind_param("sss", $username, $hashedPassword, $email);

        if ($stmt->execute()) {
            return "Registration successful!";
        } else {
            return "Error: " . $stmt->error;
        }
    }
}

// Function to login a user
function loginUser($conn, $username, $password) {
    // Check if the username exists
    $checkQuery = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($checkQuery);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            return "Login successful!";
        } else {
            return "Incorrect password";
        }
    } else {
        return "Username not found";
    }
}

// Handle form submissions
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['register'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $email = $_POST['email'];
        $message = registerUser($conn, $username, $password, $email);
    } elseif (isset($_POST['login'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $message = loginUser($conn, $username, $password);
    }
}

// Close connection
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login/Register</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="auth-container">
        <div class="form-box">
            <h1>Login</h1>
            <form method="post" action="auth.php">
                <div class="input-group">
                    <label for="login-username">Username</label>
                    <input type="text" id="login-username" name="username" required>
                </div>
                <div class="input-group">
                    <label for="login-password">Password</label>
                    <input type="password" id="login-password" name="password" required>
                </div>
                <button type="submit" name="login" class="btn">Login</button>
                <p class="switch-form">Don't have an account? <a href="#" onclick="switchForm('register')">Register here</a></p>
                <?php if (isset($message) && isset($_POST['login'])) { echo "<p>$message</p>"; } ?>
            </form>
        </div>

        <div class="form-box">
            <h1>Register</h1>
            <form method="post" action="auth.php">
                <div class="input-group">
                    <label for="register-username">Username</label>
                    <input type="text" id="register-username" name="username" required>
                </div>
                <div class="input-group">
                    <label for="register-password">Password</label>
                    <input type="password" id="register-password" name="password" required>
                </div>
                <div class="input-group">
                    <label for="register-email">Email</label>
                    <input type="email" id="register-email" name="email" required>
                </div>
                <button type="submit" name="register" class="btn">Register</button>
                <p class="switch-form">Already have an account? <a href="#" onclick="switchForm('login')">Login here</a></p>
                <?php if (isset($message) && isset($_POST['register'])) { echo "<p>$message</p>"; } ?>
            </form>
        </div>
    </div>

    <script>
        function switchForm(form) {
            document.querySelectorAll('.form-box').forEach(box => box.style.display = 'none');
            document.querySelector('.form-box h1').innerHTML = form.charAt(0).toUpperCase() + form.slice(1);
            document.querySelector(`.${form}-form`).style.display = 'block';
        }
    </script>
</body>
</html>
