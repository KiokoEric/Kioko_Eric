import './App.css';
import Home from './Components/Home/Home';
import Skills from './Pages/Skills/Skills';
import Itrack from './Pages/Itrack/Itrack';
import About from './Components/About/About';
import Paths from './Components/Paths/Paths';
import Contact from './Pages/Contact/Contact';
import EBudget from './Pages/EBudget/EBudget';
import Educate from './Pages/Educate/Educate';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Projects from './Pages/Projects/Projects';
import { Routes, Route } from 'react-router-dom';
import Better_Health from './Pages/Better_Health/Better_Health';
import Kitchen_Stories from './Pages/Kitchen_Stories/Kitchen_Stories';

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <div className='flex flex-col items-center gap-5 my-10 px-5 xl:flex-row xl:items-start'>
        <section className='mb-5 xl:w-1/3'>
          <About />
        </section>
        <section className='xl:w-2/3'>
          <Paths />
          <Routes>
            <Route path='/' element={ <Projects /> } />
            <Route path='/Itrack' element={ <Itrack /> } />
            <Route path="/Skills" element={ <Skills /> } />
            <Route path='/EBudget' element={ <EBudget /> } />
            <Route path='/Educate' element={ <Educate /> } />
            <Route path="/Contact" element={ <Contact /> } />
            <Route path="/Better_Health" element={ <Better_Health /> } />
            <Route path='/Kitchen_Stories' element={ <Kitchen_Stories /> } />
          </Routes>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
