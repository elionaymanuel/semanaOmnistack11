const express = require('express'); // importanto um pacote
const cors = require('cors');
const routes = require('./routes')// o ./ é pra indicar que eh um arquivo e nao um pacote

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);




app.listen(3333);