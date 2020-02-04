import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) =>
  res.json({ Message: 'debuging is active or non!' })
);

export default routes;
