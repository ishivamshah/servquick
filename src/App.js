import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Footer } from './common/Footer';
import { Header } from './common/Header';
import {Features} from './screens/Features'
import {AboutUs} from './screens/AboutUs'
import {ContactUs} from './screens/ContactUs'
import {Pricing} from './screens/Pricing'
import {LogIn} from './screens/LogIn'
import { Home } from './screens/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'


function App() {
  return (
    <>
    <Header />
    <Routes >
      <Route path="/" element={<Home />}/>
      <Route path="/features" element={<Features />}/>
      <Route path="/aboutus" element={<AboutUs />}/>
      <Route path="/contactus" element={<ContactUs />}/>
      <Route path="/pricing" element={<Pricing />}/>
      <Route path="/logIn" element={<LogIn />}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
