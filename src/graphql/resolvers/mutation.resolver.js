import { find,filter } from 'lodash';

export const mutationResolver = {
    Mutation: {
        upvotePost: (_, { postId }) => {
            const post = find(posts, {
                id: postId
            });
            if (!post) {
                throw new Error(`Couldn't find post with id ${postId}`);
            }
            post.votes += 1;
            return post;
        },
    }
};
