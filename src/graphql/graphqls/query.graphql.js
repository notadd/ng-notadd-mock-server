export const Query = `
    # the schema allows the following query:
    type Query {
        widgets: [ Widget ],
        baseIcon: BaseIcon,
        mdiIcons: [ MDIIcon ],
        login(userName: String!, password: String!, email: String!, token: String!): Login 
    }
`;
