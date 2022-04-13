import './assets/css/App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Body from './components/Body.js';



function App() {
  return (
    <div className="App">
    <Header />
      <section>
        <Body />
      </section>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
      <Footer />
    </div>
  );
}

export default App;
