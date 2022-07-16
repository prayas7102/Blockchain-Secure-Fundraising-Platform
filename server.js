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

        // server.get('/', (req, res) => {
        //     console.log('/');
        // });
        // server.get('/pages/campaign/new', (req, res) => {
        //     console.log('/pages/new');
        // });
        // server.get('/pages/campaign/?campaign=address', (req, res) => {
        //     console.log('/pages/campaign/?campaign=address');
        // });
        
        server.get('/campaign/:address/requests', (req, res) => {
            server.render('/campaign/requests/index')
        })
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
    });

// app.prepare().then(() => {
//     createServer(async (req, res) => {
//         try {
//             // Be sure to pass `true` as the second argument to `url.parse`.
//             // This tells it to parse the query portion of the URL.
//             const parsedUrl = parse(req.url, true)
//             const { pathname, query } = parsedUrl
//             const server = express();
//             console.log(parsedUrl)
    
//             if (pathname === '/a') {
//                 await app.render(req, res, '/a', query)
//             } else if (pathname === '/b') {
//                 await app.render(req, res, '/b', query)
//             } else {
//                 await handle(req, res, parsedUrl)
//             }
//         } catch (err) {
//             console.error('Error occurred handling', req.url, err)
//             res.statusCode = 500
//             res.end('internal server error')
//         }
//     })
//         .listen(port, (err) => {
//             if (err) throw err
//             console.log(`> Ready on http://${hostname}:${port}`)
//         })
// });