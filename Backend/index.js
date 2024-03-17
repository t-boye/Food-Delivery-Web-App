const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const crypto = require("crypto");

// Load environment variables
require("dotenv").config();

//import user Model
const User = require("./models/User");
// Import the utility file
const utils = require("./utils");

const jwtSecret = utils.generateRandomSecret();

const PORT = process.env.PORT || 5001;
// Create an Express app instance
const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Enable CORS (adjust origins if needed)
app.use(cors({ origin: "http://localhost:5173" }));

// Connect to your MongoDB database (replace with your connection details)
mongoose.connect("mongodb://localhost:27017/myFoodApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection; // Get the connection object

// Handle connection errors
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB database!");
});

// Define the '/login' endpoint
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare hashed passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Login successful, generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    }); // Expires in 1 hour

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Middleware to authenticate users with JWT tokens
app.use((req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Extract token from header
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token with secret
    req.user = decoded; // Attach decoded user info to request object
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
});

// Secure Profile Access (protected)
app.get("/profile", (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  // Use template literals or string interpolation for secure output
  res.json({ message: `Welcome back, ${req.user.name}` });
});

app.post("/logout", (req, res) => {
  // Implement logic to invalidate or revoke JWT token (optional)
  res.json({ message: "Logged out successfully" });
});

// Define the '/register' endpoint
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Data Validation (optional, can be extended)
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please fill in all required fields" });
    }

    // Check for existing user with the same email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    // Respond with success or send a confirmation email (optional)
    res.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
