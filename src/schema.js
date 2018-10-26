// This example demonstrates a simple server with some
// Read the complete docs for graphql-tools here:
// http://dev.apollodata.com/tools/graphql-tools/generate-schema.html

import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import { typeDefs } from './graphql/graphqls';
import { resolvers } from './graphql/resolvers';
import { mocks } from './graphql/mocks';

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

// This function call adds the mocks to your schema!
addMockFunctionsToSchema({ schema, mocks, preserveResolvers: true });
