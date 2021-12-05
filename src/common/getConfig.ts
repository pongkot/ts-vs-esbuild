require('dotenv').config({path: '.env'});
import * as _ from 'lodash';

type TGetConfig = {
    database: {
        acme: {
            user: string
            pass: string
            host: string
            name: string
        }
    }
}

export const getConfig = (env = process.env): TGetConfig => {
    return {
        database: {
            acme: {
                host: _.get(env, '', 'localhost'),
                user: _.get(env, '', '***'),
                pass: _.get(env, '', '***'),
                name: _.get(env, '', 'acme'),
            },
        },
    };
};
