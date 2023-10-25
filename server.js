const express = require('express')
const apiRouter = require('./src/routes')
const PORT = 3000
const app = express()

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});
apiRouter(app);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${PORT}`)
})
