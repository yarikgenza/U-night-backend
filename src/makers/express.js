import routes from '../routes';
import middlewares from '../middlewares';

const {
  eventRoutes,
} = routes;
const {
  errorHandler,
} = middlewares;


export const registerRoutes = (app) => {
  app.use('/api', eventRoutes);
};

export const registerMiddlewares = (app) => {
  app.use(errorHandler);
};
