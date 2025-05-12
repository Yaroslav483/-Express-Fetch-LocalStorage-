const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

const user = require('./user');

app.use(cors());
app.use(express.json());

app.post('/click', (req, res) => {
  const result = user.click();
  if (result.error) return res.status(result.code).json({ message: result.error });
  return res.status(200).json(result);
});

app.post('/passive-income', (req, res) => {
  const result = user.passiveIncome();
  if (result.error) return res.status(result.code).json({ message: result.error });
  return res.status(200).json(result);
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер працює на http://localhost:${PORT}`);
});

