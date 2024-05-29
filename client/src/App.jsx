import {BrowserRouter,Routes , Route} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './components/Header';
import HowWeWork from './pages/HowWeWork';
import Footer from './components/Footer';
import OurServices from './pages/OurServices';

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/Home' element = {<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/HowWeWork' element={<HowWeWork/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/sign-in' element = {<SignIn/>}/>
        <Route path='/sign-up' element = {<SignUp/>}/>
        <Route path='/profile' element = {<Profile/>}/>
        <Route path='/ourservices' element={<OurServices/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

