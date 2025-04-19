const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON body
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Pass control to the next handler
  });

  app.get('/', (req, res) => {
    res.send('Hello, Middleware!');
  });

// POST API
app.post('/api/data', (req, res) => {
  const { name, age } = req.body;
  res.json({ message: `Received data for ${name}, age ${age}` });
});

app.get('/api/users', (req, res) => {
    const { name, age } = req.query;
    res.send(`User name is ${name}, age is ${age}`);
});


// Sample in-memory "database"
let users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 }
];

// PUT route to update user by ID
app.put('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, age } = req.body;

  const user = users.find(u => u.id === userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Update user data
  if (name) user.name = name;
  if (age) user.age = age;

  res.json({ message: 'User updated', user });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});