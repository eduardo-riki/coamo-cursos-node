import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => {
  return res.send('Hello World!');
});

router.get('/teste', (req, res) => {
  return res.send('Hello Teste!');
});

router.post('/teste', (req, res) => {
  console.log(req);

  return res.status(StatusCodes.ACCEPTED).json(req.body);
});

export { router };