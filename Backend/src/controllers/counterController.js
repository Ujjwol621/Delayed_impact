import counterService from '../services/counterService.js';

const create = async (req, res) => {
  try {
    const counter = await counterService.createCounter(req.body);
    res.status(201).json(counter);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const list = async (req, res) => {
  try {
    const counters = await counterService.listCounters();
    res.json(counters);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default {
  create,
  list
};

