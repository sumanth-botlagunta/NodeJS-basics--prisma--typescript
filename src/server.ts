import express from 'express';
const app = express();

app.get('/', (req, res) => {
  console.log('Hello from Express Server');
  res.status(200);
  res.json({ message: 'Hello' });
});

export default app;
