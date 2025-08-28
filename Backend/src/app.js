import connectDB from './data/db.js';
import express from 'express';
import cors from "cors";
import countRoute from './router/counterRouter.js'
import authRoute from './router/userRouter.js';
import servicesRoute from './router/serviceRouter.js'
import tokenRoute from './router/tokenRouter.js'
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/counter",countRoute);
app.use("/api/services",servicesRoute);
app.use("/api/token",tokenRoute);



connectDB();
app.listen(8000, () => {
  console.log('Server running on port 8000');
});





