import {useEffect} from 'react';
import {logger} from 'helpers';

import HomeScreen from 'components/screens/home';

const App = () => {
  useEffect(() => {
    logger('Running app version:', process.env.REACT_APP_VERSION);
  }, []);

  return (
    <div className="App">
      <h1>Hey</h1>
      <HomeScreen />
    </div>
  );
};

export default App;
