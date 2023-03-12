import {useEffect} from 'react';
import {logger} from 'helpers';
import Container from '@mui/material/Container';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from 'components/header';
import Footer from 'components/footer';
import AnimalsScreen from 'components/screens/animals/home';
import ErrorScreen from 'components/reusables/error';
import ForumHomeScreen from 'components/screens/forum/home';
import LoginScreen from 'components/screens/auth/Login';
import RegisterScreen from 'components/screens/auth/Register';
import AboutScreen from 'components/screens/about';
import AnimalDetailScreen from 'components/screens/animals/detail';
import PostDetailScreen from 'components/screens/forum/post';

const App = () => {
  useEffect(() => {
    logger('Running app version:', process.env.REACT_APP_VERSION);
  }, []);

  return (
    <div className="App" style={{height: '100vh'}}>
      <Router>
        <Header />
        <Container maxWidth="xl">
          <Routes>
            <Route index path="/" element={<AnimalsScreen />} />
            <Route path="/animals/:animalId" element={<AnimalDetailScreen />} />
            <Route path="/animals" element={<AnimalsScreen />} />
            <Route path="/community/:postId" element={<PostDetailScreen />} />
            <Route path="/community" element={<ForumHomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="*" element={<ErrorScreen />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
