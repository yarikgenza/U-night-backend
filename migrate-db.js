const migrate = require('migrate');
const set = migrate.load('migrations/.migrate', 'migrations');

set.up((err) => {
  if (err) throw err;

  console.log(`Migration completed for ${process.env.NODE_ENV}`);
  process.exit(0);
 });
