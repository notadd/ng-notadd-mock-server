import { authorsResolvers } from './author.resolver';

import { queryResolver } from './query.resolver';
import { mutationResolver } from './mutation.resolver';

export const resolvers = {
    ...authorsResolvers,

    ...queryResolver,
    ...mutationResolver
};
