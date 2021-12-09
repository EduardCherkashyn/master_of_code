const { port } = require('./config');
const app = require('./server');

const boot = async () => {
  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
};

boot();
