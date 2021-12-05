import { getConfig } from './getConfig';

export const getAcmeConnectUri = (dbConfig = getConfig().database.acme): string => {
    return `mysql://${dbConfig.user}:${dbConfig.pass}@${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`;
};
