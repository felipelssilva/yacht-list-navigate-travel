import { browserHistory } from 'react-router';

export const removeQuery = (...queryNames) => {
    const location = getLocation();
    queryNames.forEach(q => delete location.query[q]);
    browserHistory.push(location);
};

export const getQuery = (queryName) => {
    const location = getLocation();
    return location.query[queryName];
};

export const getLocale = () => {
    const location = getLocation();
    return location.pathname;
};

export const getLocation = () =>
    Object.assign({}, browserHistory.getCurrentLocation());

