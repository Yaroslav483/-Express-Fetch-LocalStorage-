const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

const upgrades = require('./upgrades');

app.use(cors());
app.use(express.json());


app.get('/upgrades', (req, res) => {
  res.json(upgrades.getAll());
});


app.get('/upgrades/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const upgrade = upgrades.getById(id);
  if (!upgrade) return res.status(404).json({ message: 'Апгрейд не знайдено' });
  res.json(upgrade);
});


app.post('/upgrades', (req, res) => {
  const result = upgrades.create(req.body);
  if (result.error) return res.status(400).json({ message: result.error });
  res.status(201).json(result.upgrade);
});

app.put('/upgrades/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const result = upgrades.update(id, req.body);
  if (result.error) return res.status(404).json({ message: result.error });
  res.json(result.upgrade);
});


app.delete('/upgrades/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const result = upgrades.remove(id);
  if (result.error) return res.status(404).json({ message: result.error });
  res.json({ message: 'Апгрейд видалено', deleted: result.deleted });
});

app.listen(PORT, () => {
  console.log(`🚀 API працює на http://localhost:${PORT}`);
});

