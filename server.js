const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// using body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "index.html"))
  res.sendFile(path.join(__dirname, "index.html"));
});
// For Handling form submission
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  // Here you can process the form data (e.g., send an email, save to a database)
  // For now, let's just log the data to the console.
  console.log('Form Data:', { name, email, message });

  // You can send a response back to the client if needed.
  res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
