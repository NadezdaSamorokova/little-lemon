import './App.css';
import Navbar from './pages/Navbar';
import Header from './pages/Header';
import Specials from './pages/Specials';
import Testimonials from './pages/Testimonials';
import Main from './pages/Main';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Specials/>
      <Testimonials/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
