const express = require('express');
const cors = require('cors');
const { encodePassword, generateToken } = require('./auth');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const users = [];

app.post('/sign-up', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email і пароль обов’язкові' });
  }

  if (password.length < 8) {
    return res.status(400).json({ message: 'Пароль має бути мінімум 8 символів' });
  }

  if (users.find(user => user.email === email)) {
    return res.status(400).json({ message: 'Користувач вже існує' });
  }

  users.push({ email, password: encodePassword(password) });
  return res.status(201).json({ message: 'Реєстрація успішна' });
});

app.post('/sign-in', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email і пароль обов’язкові' });
  }

  const user = users.find(u => u.email === email);

  if (!user || user.password !== encodePassword(password)) {
    return res.status(401).json({ message: 'Невірний email або пароль' });
  }

  const token = generateToken(email);
  return res.status(200).json({ token });
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});

