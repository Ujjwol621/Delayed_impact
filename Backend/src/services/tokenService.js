import Token from '../models/tokenModel.js';

const generateToken = async (serviceId, customerId, counter) => {
  if (!counter) throw new Error("Counter is required to generate token");

  // Calculate base number (Counter 1 → 100, Counter 2 → 200, etc.)
  const baseNumber = counter * 100;

  // Find last token for this counter
  const lastToken = await Token.find({ counter }).sort({ tokenNumber: -1 }).limit(1);

  let newTokenNumber;
  if (lastToken.length) {
    newTokenNumber = lastToken[0].tokenNumber + 1;
  } else {
    newTokenNumber = baseNumber + 1;
  }

  const token = new Token({
    tokenNumber: newTokenNumber,
    serviceId,
    customerId,
    status: 'Pending',
    counter
  });

  return await token.save();
};

// Queue by service (existing functionality)
const getQueue = async (serviceId) => {
  return await Token.find({ serviceId, status: { $in: ['Pending', 'Serving'] } })
    .sort({ tokenNumber: 1 });
};

// Queue by service + counter (new)
const getQueueByCounter = async (serviceId, counter) => {
  return await Token.find({ serviceId, counter, status: { $in: ['Pending', 'Serving'] } })
    .sort({ tokenNumber: 1 });
};

export default {
  generateToken,
  getQueue,
  getQueueByCounter
};

