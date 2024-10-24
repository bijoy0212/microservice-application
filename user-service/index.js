const express = require('express');
const app = express();
const port = 3000;

const users = [
    { id: 1, name: 'Haris Does', email: 'haris@example.com', age: 35 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 }
    ]; 

app.get('/users', (req, res) => {
  res.json(users);
});  

app.listen(port, () => {
  console.log(`User Service running on port ${port}`);
});