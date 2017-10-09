import queryString from 'query-string';

const ENDPOINT_MAP = {
    'ping_trademe': '/pingTrademe'
};

const findEndpoint = (str) => {
    const obj = queryString.parse(str);
    const contextType = obj.contextType;
    return ENDPOINT_MAP[contextType];
};

const appEndpoint = findEndpoint(location.search);

export default appEndpoint;

