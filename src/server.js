require('dotenv').config();
const app = require('./api');

const port = process.env.API_PORT || 3000;

app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, async () => {
  console.log('ouvindo porta', port);
});
