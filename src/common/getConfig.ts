require('dotenv').config({path: '.env'});
import * as _ from 'lodash';

type TGetConfig = {
    database: {
        acme: {
            user: string
            pass: string
            host: string
            name: string
            port: number
        }
    }
}

export const getConfig = (env = process.env): TGetConfig => {
    return {
        database: {
            acme: {
                host: _.get(env, 'ACME_DB_HOST', 'localhost'),
                user: _.get(env, 'ACME_DB_USER', '***'),
                pass: _.get(env, 'ACME_DB_PASS', '***'),
                name: _.get(env, 'ACME_DB_NAME', 'acme'),
                port: _.toNumber(_.get(env, 'ACME_DB_PORT', '3306')),
            },
        },
    };
};
