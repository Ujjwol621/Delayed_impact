import express from 'express';
import counterController from '../controllers/counterController.js';
const route = express.Router();
route.post('/', counterController.create);
route.get('/', counterController.list);

export default route;
