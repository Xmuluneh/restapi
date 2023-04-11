import express from 'express';
import routes from './src/student/routes.js';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
app.get('/', (req, res) => {
  res.send(`hello Aaron`);
});

app.listen(port, () => {
  console.log(`Server is running on port :${process.env.PORT}`);
});
app.use('/api/v1/students', routes);
app.listen(port, () => {
  console.log(`Server is running on port :${process.env.PORT}`);
});
