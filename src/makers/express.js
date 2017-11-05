import {
  eventRoutes,
} from '../routes';

import {
  errorHandler,
} from '../middlewares';


export const registerRoutes = (app) => {
  app.use('/api', eventRoutes);
};

export const registerMiddlewares = (app) => {
  app.use(errorHandler);
};
