// This example demonstrates a simple server with some
// Read the complete docs for graphql-tools here:
// http://dev.apollodata.com/tools/graphql-tools/generate-schema.html
import { ApolloServer } from 'apollo-server-express';

// Imports: GraphQL TypeDefs & Resolvers & Mocks
import { typeDefs } from './graphql/graphqls';
import { resolvers } from './graphql/resolvers';
import { mocks } from './graphql/mocks';

const SERVER = new ApolloServer({
    typeDefs,
    resolvers,
    mocks,
    mockEntireSchema: false,
    playground: {
        endpoint: `http://localhost:3000/graphql`,
        settings: {
            'editor.theme': 'dark'
        }
    }
});

// Exports
export default SERVER;