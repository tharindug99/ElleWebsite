const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Enable CORS
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Handle signup endpoint
app.post("/register", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  
  // Perform validation (you may want to add more validation)
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ error: "Please fill in all fields" });
    
  }console.log('error');

  // TODO: Save the user data to your database (you need to set up a database for this)

  // For now, just send a success response
  res.json({ message: "Signup successful!" });
});

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
