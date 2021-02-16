// @flow
import cors from 'cors';

export const corsOptions = {
  origin:
    process.env.NODE_ENV === 'production' && !process.env.FORCE_DEV
      ? [
          'https://beta.weirdstreet.com',
          'https://alpha.beta.weirdstreet.com',
          'https://admin.beta.weirdstreet.com',
          'https://hyperion.workers.beta.weirdstreet.com',
          'https://hyperion.alpha.beta.weirdstreet.com',
          process.env.NOW_URL,
        ].filter(Boolean)
      : [/localhost/],
  credentials: true,
};

export default cors(corsOptions);
