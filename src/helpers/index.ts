const {REACT_APP_DEBUG} = process.env;

export const logger = (...args: any[]) => {
  const isDevEnv = REACT_APP_DEBUG && REACT_APP_DEBUG === 'true' ? true : false;
  const log = isDevEnv ? console.log(...args) : () => {};
  return log;
};
