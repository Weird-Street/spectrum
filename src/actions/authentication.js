export const logout = () => {
  import('shared/graphql')
    .then(module => module.clearApolloStore)
    .then(clearApolloStore => {
      // clear Apollo's query cache
      clearApolloStore();
      // redirect to home page
      window.location.href =
        process.env.NODE_ENV === 'production'
          ? '/auth/logout'
          : 'http://beta.weirdstreet.com:3001/auth/logout';
    });
};
