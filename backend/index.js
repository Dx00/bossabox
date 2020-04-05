const express = require('express');
const cors = require('cors');

const app = express();
const routes = require('./src/routes');
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
