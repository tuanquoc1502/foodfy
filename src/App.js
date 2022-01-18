import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import GlobalStyle from './assets/GlobalStyle';

import ShowProductById from './pages/showProductById/ShowProductById';
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <GlobalStyle>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ShowProductById />} />
            {/* <Route path='*' element={<NotFound />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </GlobalStyle>
  );
}

export default App;
