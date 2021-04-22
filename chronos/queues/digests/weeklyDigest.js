// @flow
const debug = require('debug')('chronos:queue:weekly-digest');
import processDigest from './processDigest';

export default () => {
  try {
    debug('Init weekly digest');
    return processDigest('weekly');
  } catch (err) {
    console.error('❌ Error in job:\n');
    console.error(err);
  }
};
