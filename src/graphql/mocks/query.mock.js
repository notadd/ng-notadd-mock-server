const casual = require('casual');

export const queryMock = {
    Query: () => ({
        persons: () => ([{
            name: casual.name,
            age: 18,
        }])
    })
};
