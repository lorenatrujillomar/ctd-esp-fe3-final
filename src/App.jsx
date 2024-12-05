import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Context } from "./Context";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from './Routes/Favs';
import { Layout } from './Layouts/Layout';

function App() {
  return (
    <Context>
      <Router basename=''>
        <Routes>
          <Route path='/' element={ <Layout /> }>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
          </Route>
        </Routes>
      </Router>
    </Context>
  );
}

export default App;