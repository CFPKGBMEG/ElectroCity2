import data from './Data';

function App() {
  return (
    <div>
      <header>
        <img src="images/word.png" alt="Word"></img>
        <img id="left" src="images/left.png" alt="left"></img>

        <div className="buttons">
          <a href="/" className="Home">
            Home
          </a>
          <a href="/" className="Account">
            Account
          </a>
          <a href="/" className="Cart">
            Cart
          </a>
        </div>
      </header>

      <main>
        <div className="Categories">
          <a href="/" id="Micro">
            Microcontrollers
          </a>
          <a href="/" id="Sensors">
            Sensors
          </a>
          <a href="/" id="IO">
            Input and Output Devices
          </a>
          <a href="/" id="Basic">
            Basic Components
          </a>
        </div>
        <h2>
          Are you looking for your E-components right now? Visit ElectroCity and
          find out what you need!
        </h2>
        <a href="#Shop">
          <button>SHOP NOW</button>
        </a>
        <h1 id="Shop">Available Products</h1>
        <div className="Products">
          {data.products.map((products) => (
            <div className="ProductList" key={products.slug}>
              <img src={products.image} alt={products.name} />

              <div className="product-info">
                <p>{products.name}</p>
                <p className="price">{products.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <div className="Electrocity">
          <h2>ELECTROCITY</h2>
          <a href="/" id="About">
            About Us
          </a>
          <a href="/" id="Team">
            Our Team
          </a>
          <a href="/" id="Partnership">
            Partnership
          </a>
          <a href="/" id="Contact">
            Contact Us
          </a>
          <a href="/" id="Follow">
            Follow Us
          </a>
        </div>

        <div className="Right">
          <h2 id="RegulationHeader">REGULATION</h2>
          <a href="/" id="Order">
            Order Guidelines
          </a>
          <a href="/" id="Warranty">
            Warranty and Return Policy
          </a>
          <a href="/" id="Privacy">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
