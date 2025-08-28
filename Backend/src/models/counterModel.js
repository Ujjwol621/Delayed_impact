import mongoose from 'mongoose';

const counterSchema = new mongoose.Schema({
  counterNumber: { type: Number, required: true },
  // serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  serviceId:{
    type:Number,
    required:true
  },
  currentToken: Number,
  createdAt: { type: Date, default: Date.now }
});

const Counter = mongoose.model('Counter', counterSchema);
export default Counter;
