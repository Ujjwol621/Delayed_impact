import express from 'express';
import serviceController from '../controllers/serviceController.js';
const route = express.Router();
route.post('/', serviceController.create);
route.get('/', serviceController.list);

export default route;
