import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './Components';
import { Main  } from './pages';
import SearchResults from './Components/SearchResults/SearchResults';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Header />}>
            <Route path='/' element={<Main />} />
            <Route path='/search' element={<SearchResults />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
