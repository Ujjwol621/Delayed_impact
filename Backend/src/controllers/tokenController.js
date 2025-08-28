import tokenService from '../services/tokenService.js';

const generate = async (req, res) => {
  try {
    const { serviceId, customerId, counter } = req.body;
    const token = await tokenService.generateToken(serviceId, customerId, counter);
    res.status(201).json(token);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getQueue = async (req, res) => {
  try {
    const { serviceId } = req.params;
    const queue = await tokenService.getQueue(serviceId);
    res.json(queue);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getQueueByCounter = async (req, res) => {
  try {
    const { serviceId, counter } = req.params;
    const queue = await tokenService.getQueueByCounter(serviceId, counter);
    res.json(queue);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default {
  generate,
  getQueue,
  getQueueByCounter
};


