import Counter from '../models/counterModel.js';

const createCounter = async ({ counterNumber, serviceId, currentToken }) => {
  const counter = new Counter({ counterNumber, serviceId, currentToken });
  return await counter.save();
};

const listCounters = async () => {
  return await Counter.find();
};

export default {
  createCounter,
  listCounters
};
