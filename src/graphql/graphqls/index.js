// Imports: GraphQL
import { gql } from 'apollo-server-express';

import { Widget } from "./analysis.graphql";
import { BaseIcon, MDIIcon } from "./icon.graphql";
import { Query } from "./query.graphql";

const typeDefs = gql`
    ${Widget},
    ${BaseIcon},
    ${MDIIcon},

    ${Query}
`;

export {
    typeDefs
}
