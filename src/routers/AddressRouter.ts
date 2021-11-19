import { Router } from 'express';
import Container from 'typedi';
const router = Router();
import { AddressController  } from '../controllers/AddressController';

const getController = (): AddressController => {
  return Container.get<AddressController>('AddressController');
};

const crateRouter = () => {
  router.get('/:cep', (req, res) => getController().get(req, res));

  return router;
};

export default crateRouter;
