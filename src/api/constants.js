// @flow
export const IS_PROD = process.env.NODE_ENV === 'production';

export const SERVER_URL = IS_PROD
  ? // In production we want to redirect to /whatever
    ``
  : // In development we gotta redirect to beta.weirdstreet.com:3001/whatever tho
    'http://beta.weirdstreet.com:3001';

export const CLIENT_URL = IS_PROD
  ? `${window.location.protocol}//${window.location.host}`
  : 'http://beta.weirdstreet.com:3000';
