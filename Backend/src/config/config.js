import dotenv from 'dotenv';
dotenv.config();

const config = {
   ports: process.env.PORT || 3000
};

export default config;