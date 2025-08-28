import mongoose from 'mongoose';
const tokenSchema = new mongoose.Schema({
  tokenNumber: { type: Number, required: true },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['Pending','Serving','Completed','Missed'], default: 'Pending' },
  counter: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Token = mongoose.model('Token', tokenSchema);
export default Token;
