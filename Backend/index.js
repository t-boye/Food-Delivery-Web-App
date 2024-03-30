const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const FormDataModel = require("./models/FormData");

const bcrypt = require("bcrypt");

// Import the utility file
const utils = require("./utils");

const PORT = process.env.PORT || 5173;
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

// Define the '/register' endpoint
app.post("http://localhost:5173/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Data Validation (optional, can be extended)
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please fill in all required fields" });
    }

    // Check for existing user
    const existingUser = await FormDataModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10); // Hash password with bcrypt

    // Create new user with hashed password
    const newUser = new FormDataModel({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save(); // Save the new user

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Define the '/login' endpoint
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email (using the correct model)
    const user = await FormDataModel.findOne({ email });
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
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
