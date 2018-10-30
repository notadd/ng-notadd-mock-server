import { find,filter } from 'lodash';
import { widgets } from '../../mock-data';

export const queryResolver = {
    Query: {
        widgets: () => widgets
    }
};
