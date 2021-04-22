const crashReporter = store => next => action => {
  // Handle THROW_ERROR actions
  if (action.type === 'THROW_ERROR') {
    console.error('Caught an exception!', action.err);
  }

  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    throw err;
  }
};

export default crashReporter;
