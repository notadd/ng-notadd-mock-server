export const Query =  `
    # the schema allows the following query:
    type Query {
        posts: [Post]
        author(id: Int!): Author
        persons: [Person]
    }
`;
