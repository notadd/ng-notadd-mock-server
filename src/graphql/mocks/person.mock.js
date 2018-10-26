import { MockList } from 'graphql-tools';

export const personMock = {
    Person: () => ({
        // a list of length between 2 and 6 (inclusive)
        friends: () => new MockList([2,6])
    })
};
