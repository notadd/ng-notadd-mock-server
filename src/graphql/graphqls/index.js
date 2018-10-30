import { Widget } from "./analysis.graphql";

import { Query } from "./query.graphql";

const typeDefs = `
    ${Widget},

    ${Query}
`;

export {
    typeDefs
}
