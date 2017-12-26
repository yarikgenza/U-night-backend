import routes from '../routes';
import middlewares from '../middlewares';

const {
  authRoutes,
  eventRoutes,
  userRoutes,
  clubRoutes,
} = routes;
const {
  errorHandler,
} = middlewares;


export const registerRoutes = (app, passport) => {
  app.use('/auth', authRoutes(passport));
  app.use('/api', eventRoutes);
  app.use('/api', userRoutes(passport));
  app.use('/api', clubRoutes);
};

export const registerMiddlewares = (app) => {
  app.use(errorHandler);
};
