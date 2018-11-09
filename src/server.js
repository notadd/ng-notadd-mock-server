import express from 'express';

import SERVER from './schema';

const PORT = 3000;
const APP = express();

// Middleware: GraphQL
SERVER.applyMiddleware({
    app: APP
});

// Express: Listener
APP.listen(PORT, () => {
    console.log(`The server has started on port: ${PORT}`);
    console.log(`http://localhost:${PORT}/graphql`);
});
