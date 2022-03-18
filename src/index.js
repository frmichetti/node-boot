import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";

process.env.TZ = 'America/Sao_Paulo';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

process.on('uncaughtException', function (error) {
  console.log(error.stack);
  console.log("uncaughtException Node NOT Exiting...");
});

const port = process.env.PORT || 4000;

app.get('/welcome', (req, res, next) => {
  res.status(200).send({ message: 'Welcome' })
});

app.post('/welcome', (req, res, next) => {
  res.status(200).send(req.body)
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
