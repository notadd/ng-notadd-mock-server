// Imports: GraphQL
import { gql } from 'apollo-server-express';

import { Widget } from "./analysis.graphql";
import { BaseIcon, MDIIcon } from "./icon.graphql";
import { Query } from "./query.graphql";
import { Login } from "./login.graphql";

const typeDefs = gql`
    ${Widget},
    ${BaseIcon},
    ${MDIIcon},
    ${Login},
    
    ${Query}
`;

export {
    typeDefs
}
