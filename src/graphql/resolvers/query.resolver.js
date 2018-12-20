import { find,filter } from 'lodash';
import rp from 'request-promise';
import { widgets, baseIcon, mdiIcon } from '../../mock-data';

export const queryResolver = {
    Query: {
        widgets: () => widgets,
        baseIcon: () => baseIcon,
        mdiIcons: () => mdiIcon.icons,
        login: (obj, args, context, info) => {
            return { code: context.request || '没有获取到ip'}
            /* rp({
                uri: 'https://www.google.com/recaptcha/api/siteverify',
                qs: {
                    secret: '6Lf4g4EUAAAAADUccKXW6ULDAKqj7hmk118fZtPY',
                    response: args.token
                }
            }).then(res => {
                console.log(res);
            }); */
        }
    }
};
