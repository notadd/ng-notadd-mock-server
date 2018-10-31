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

/* 
const schemaFunction = Schema.schemaFunction || (() => Schema.schema);
const rootFunction = Schema.rootFunction || (() => schema.rootValue);
const contextFunction = Schema.context || ((headers, secrets) => Object.assign({ headers }, secrets));

// allow custom header and CORS
server.all('*', (request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    response.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    request.method == 'OPTIONS' ? response.sendStatus(200) : next();
});

server.use('/graphql', bodyParser.json(), graphqlExpress(async (request) => {
    if (!schema) {
        schema = schemaFunction(process.env)
    }
    const context = await contextFunction(request.headers, process.env);
    const rootValue = await rootFunction(request.headers, process.env);

    return {
        schema: await schema,
        rootValue,
        context,
        tracing: false,
    };
}));

server.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
    query: `# Welcome to GraphiQL`,
}));

server.listen(PORT, () => {
    console.log(`GraphQL Server is now running on http://localhost:${PORT}/graphql`);
    console.log(`View GraphiQL at http://localhost:${PORT}/graphiql`);
}); */