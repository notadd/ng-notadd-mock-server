import { find,filter } from 'lodash';
import { posts, authors } from '../../mock-data';

export const authorsResolvers =  {
    Author: {
        posts: (author) => filter(posts, {
            authorId: author.id
        }),
    },
    Post: {
        author: (post) => find(authors, {
            id: post.authorId
        }),
    }
};
