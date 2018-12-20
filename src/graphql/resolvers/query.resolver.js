import { find,filter } from 'lodash';
import rp from 'request-promise';
import { widgets, baseIcon, mdiIcon } from '../../mock-data';

export const queryResolver = {
    Query: {
        widgets: () => widgets,
        baseIcon: () => baseIcon,
        mdiIcons: () => mdiIcon.icons,
        login: async (obj, args, context, info) => {
            let rpResponse = await rp({
                uri: 'https://www.google.com/recaptcha/api/siteverify',
                qs: {
                    secret: '6Lf4g4EUAAAAADUccKXW6ULDAKqj7hmk118fZtPY',
                    response: args.token,
                    remoteip: context.ip
                }
            });
            rpResponse = JSON.parse(rpResponse);

            let validatedUser = false;
            let errorCodes = [];
            if (rpResponse.success) {
                validatedUser = rpResponse.score > 0.5;
            } else {
                errorCodes = rpResponse["error-codes"];
            }
            return {
                validatedUser,
                errorCodes
            }
        }
    }
};
