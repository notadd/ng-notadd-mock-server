import { find,filter } from 'lodash';
import { posts, authors } from '../../mock-data';

export const queryResolver = {
    Query: {
        posts: () => posts,
        author: (_, { id }) => find(authors, {
            id: id
        }),
    }
};
