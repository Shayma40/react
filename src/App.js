import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Cards />
    </div>
  );
}

export default App;
