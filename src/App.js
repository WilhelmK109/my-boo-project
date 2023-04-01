import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import BookList from './components/BookList';
import Navigation from './components/Navigation';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
