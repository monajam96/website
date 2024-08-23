import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Header from './components/header';
import Program from './components/program';
import About from './components/about';
import Campus from './components/campus';
import Testimonials from './components/testimonials'
import Contact from './components/contact';
function App() {
  const mainStyle={
    backgroundColor:"#f5f5f5",
    fontFamily: 'Outfit, sansSerif',
  }
  return (

    <div style={mainStyle}>
      <Header />
      <Program />
      <About />
      <Campus />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
