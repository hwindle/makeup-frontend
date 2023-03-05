import { BrowserRouter, Route, Routes } from 'react-router-dom';
// pages
import APIProducts from '../Pages/APIProducts';
import FavMakeupPage from '../Pages/FavMakeupPage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<APIProducts />} />
        <Route exact path='/favourites' element={<FavMakeupPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default MainRouter;