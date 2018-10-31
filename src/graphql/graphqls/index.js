// Imports: GraphQL
import { gql } from 'apollo-server-express';

import { Widget } from "./analysis.graphql";
import { Query } from "./query.graphql";

const typeDefs = gql`
    ${Widget},

    ${Query}
`;

export {
    typeDefs
}
