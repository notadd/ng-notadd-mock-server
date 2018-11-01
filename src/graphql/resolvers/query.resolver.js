import { find,filter } from 'lodash';
import { widgets, baseIcon, mdiIcon } from '../../mock-data';

export const queryResolver = {
    Query: {
        widgets: () => widgets,
        baseIcon: () => baseIcon,
        mdiIcons: () => mdiIcon.icons
    }
};
