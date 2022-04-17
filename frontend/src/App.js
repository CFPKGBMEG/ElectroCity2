//import data from './Data';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">
            <img src="images/word.png" alt="Logo"></img>

            <img id="left" src="images/left.png" alt="left"></img>
          </Link>

          {/*  <div className="buttons">
          <Link to="/" className="Home">
            Home
          </a>
          <Link to="/" className="Account">
            Account
          </a>
          <Link to="/" className="Cart">
            Cart
          </a>
        </div> */}
        </header>

        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>

        <footer>
          <div className="Electrocity">
            <h2>ELECTROCITY</h2>
            <Link to="/" id="About">
              About Us
            </Link>
            <Link to="/" id="Team">
              Our Team
            </Link>
            <Link to="/" id="Partnership">
              Partnership
            </Link>
            <Link to="/" id="Contact">
              Contact Us
            </Link>
            <Link to="/" id="Follow">
              Follow Us
            </Link>
          </div>

          <div className="Right">
            <h2 id="RegulationHeader">REGULATION</h2>
            <Link to="/" id="Order">
              Order Guidelines
            </Link>
            <Link to="/" id="Warranty">
              Warranty and Return Policy
            </Link>
            <Link to="/" id="Privacy">
              Privacy Policy
            </Link>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
