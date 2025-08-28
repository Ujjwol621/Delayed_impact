import serviceService from '../services/serviceService.js';

const create = async (req, res) => {
  try {
    const service = await serviceService.createService(req.body);
    res.status(201).json(service);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const list = async (req, res) => {
  try {
    const services = await serviceService.listServices();
    res.json(services);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default {
  create,
  list
};

