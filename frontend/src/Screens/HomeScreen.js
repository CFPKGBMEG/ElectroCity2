import { Link } from 'react-router-dom';
import data from '../Data';

function HomeScreen() {
  return (
    <div>
      <div className="Categories">
        <Link to="/" id="Micro">
          Microcontrollers
        </Link>
        <Link to="/" id="Sensors">
          Sensors
        </Link>
        <Link to="/" id="IO">
          Input and Output Devices
        </Link>
        <Link to="/" id="Basic">
          Basic Components
        </Link>
      </div>
      <h2>
        Are you looking for your E-components right now? Visit ElectroCity and
        find out what you need!
      </h2>
      <a href="#Shop">
        <button className="ShopNow">SHOP NOW</button>
      </a>
      <h1 id="Shop">Available Products</h1>
      <div className="Products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <p>{product.name}</p>
              <p className="price">{product.price}</p>
              <button className="Add">Add to Cart</button>
              <button className="BuyNow">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
