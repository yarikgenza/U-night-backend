/* eslint-disable */
import 'app-module-path/cwd';
import { port } from 'config';
import server from './server';

server.listen(port, () => {
  console.log(`listening at ${port}...`);
});
