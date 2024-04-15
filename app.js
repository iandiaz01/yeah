const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3004;

// Middleware to parse the body of HTTP requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// A route to handle GET requests to the root URL
app.get('/', (req, res) => {
  // Ideally, serve an HTML file with the form here
  res.send(`<!DOCTYPE html>
<html>
<head>
    <title>Sample Form</title>
</head>
<body>
    <form action="/submit-form" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>
        <button type="submit">Submit</button>
    </form>
</body>
</html>`);
});

// A POST route to handle form submissions
app.post('/submit-form', (req, res) => {
  const { name, email } = req.body;
  console.log(`Received submission from ${name} with email ${email}`);
  res.send(`Thank you ${name}, we have received your form submission.`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
