import Service from '../models/serviceModel.js';

const createService = async ({ name, description, counterAssigned }) => {
  const service = new Service({ name, description, counterAssigned });
  return await service.save();
};

const listServices = async () => {
  return await Service.find();
};

export default {
  createService,
  listServices
};
