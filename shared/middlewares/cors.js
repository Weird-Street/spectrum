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
      : [
          'http://localhost:3000',
          'http://localhost:3001',
          'https://localhost:3000',
          'https://localhost:3001',
          'https://beta.weirdstreet.com',
          'https://alpha.beta.weirdstreet.com',
          'https://admin.beta.weirdstreet.com',
          'https://hyperion.workers.beta.weirdstreet.com',
          'https://hyperion.alpha.beta.weirdstreet.com',
          'https://beta.weirdstreet.com:3000',
          'https://alpha.beta.weirdstreet.com:3000',
          'https://admin.beta.weirdstreet.com:3000',
          'https://hyperion.workers.beta.weirdstreet.com:3000',
          'https://hyperion.alpha.beta.weirdstreet.com:3000',
          'https://beta.weirdstreet.com:3001',
          'https://alpha.beta.weirdstreet.com:3001',
          'https://admin.beta.weirdstreet.com:3001',
          'https://hyperion.workers.beta.weirdstreet.com:3001',
          'https://hyperion.alpha.beta.weirdstreet.com:3001',
          'http://beta.weirdstreet.com',
          'http://alpha.beta.weirdstreet.com',
          'http://admin.beta.weirdstreet.com',
          'http://hyperion.workers.beta.weirdstreet.com',
          'http://hyperion.alpha.beta.weirdstreet.com',
          'http://beta.weirdstreet.com:3000',
          'http://alpha.beta.weirdstreet.com:3000',
          'http://admin.beta.weirdstreet.com:3000',
          'http://hyperion.workers.beta.weirdstreet.com:3000',
          'http://hyperion.alpha.beta.weirdstreet.com:3000',
          'http://beta.weirdstreet.com:3001',
          'http://alpha.beta.weirdstreet.com:3001',
          'http://admin.beta.weirdstreet.com:3001',
          'http://hyperion.workers.beta.weirdstreet.com:3001',
          'http://hyperion.alpha.beta.weirdstreet.com:3001',
          process.env.NOW_URL,
        ].filter(Boolean),
  credentials: true,
};

export default cors(corsOptions);
