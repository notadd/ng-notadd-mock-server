export const Mutaion = `
    # this schema allows the following mutation:
    type Mutation {
        upvotePost (
        postId: Int!
        ): Post
    }
`;