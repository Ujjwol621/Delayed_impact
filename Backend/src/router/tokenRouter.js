import express from 'express';
import tokenController from '../controllers/tokenController.js';

const route = express.Router();
route.post('/', tokenController.generate);
route.get('/queue/:serviceId', tokenController.getQueue);
route.get('/queue/:serviceId/:counter', tokenController.getQueueByCounter);

export default route;

