const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Sample API endpoints
app.get('/', (req, res) => {
  res.send({
    message: 'Welcome to Playwright Sample App',
    status: 'running'
  });
});

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.json({
    greeting: `Hello, ${name}!`,
    timestamp: new Date().toISOString()
  });
});

app.post('/api/calculate', (req, res) => {
  const { a, b } = req.body;
  
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Both a and b must be numbers' });
  }
  
  res.json({
    a,
    b,
    sum: a + b,
    product: a * b
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
