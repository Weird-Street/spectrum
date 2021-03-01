// @flow
import cors from 'cors';

export const corsOptions = {
  origin:
    process.env.NODE_ENV === 'production' && !process.env.FORCE_DEV
      ? [
          'https://staging.weirdstreet.com',
          'https://alpha.staging.weirdstreet.com',
          'https://admin.staging.weirdstreet.com',
          'https://hyperion.workers.staging.weirdstreet.com',
          'https://hyperion.alpha.staging.weirdstreet.com',
          process.env.NOW_URL,
        ].filter(Boolean)
      : [/localhost/],
  credentials: true,
};

export default cors(corsOptions);
