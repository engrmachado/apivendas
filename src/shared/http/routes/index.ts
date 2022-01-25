import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'usuário acessando a pagina' });
});

export default routes;
