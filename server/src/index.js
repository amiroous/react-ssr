import 'babel-polyfill';
import express from 'express';
import renderer from "./helpers/renderer";
import creatStore from "./helpers/creatStore";

const app = express();

app.use(express.static('public'));

app.get('*', (request, response) => {
    const store = creatStore();
    // TODO: Initialize and Load Data into the Store
    response.send(renderer(request, store));
});

app.listen(3000, () => {
    console.log('Listening on Port 3000');
});

