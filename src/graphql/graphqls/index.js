import { Author } from './author.graphql';
import { Person } from './person.graphql';

import { Query } from './query.graphql';
import { Mutaion } from './mutation.graphql';

let typeDefs = `
    ${Author}
    ${Person}

    ${Query}
    ${Mutaion}
`;

export {
    typeDefs
}
