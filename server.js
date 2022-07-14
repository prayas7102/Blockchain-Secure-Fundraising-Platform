import express from 'express';
import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
const app = next({ dev, hostname, port })

const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express();
        createServer(handle).get('/campaign/:address', (req, res) => {
            console.log(99)
            app.add('/campaign/Show');
        });
        server.get('*', (req, res) => {
            return handle(req, res);
        });
        server.listen(3000, (err) => {
            if (err) throw err;
            console.log('Server Ready');
        });
    })
    .catch((err) => {
        console.log(err.message);
    })