import "./App.sass";
import logo from "./images/logo.svg";
import hero1 from "./images/hero1.jpg";
import leftArrow from "./images/icon-angle-left.svg";
import rightArrow from "./images/icon-angle-right.svg";
import aboutDark from "./images/image-about-dark.jpg";
import aboutLight from "./images/image-about-light.jpg";

function App() {
  return (
    <>
      <main className="container">
        <section className="hero">
          <nav>
            <img src={logo} alt={"logo"}></img>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <img src={hero1} alt={"hero1"} className="hero-image"></img>
        </section>
        <section className="description">
          <div className="description-box">
            <h1>Discover innovative ways to decorate</h1>
            <p>
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
            </p>
            <button className="shop-now">SHOP NOW</button>
          </div>
          <div className="arrow-buttons">
            <button>
              <img src={leftArrow} alt={"left arrow"}></img>
            </button>
            <button>
              <img src={rightArrow} alt={"right arrow"}></img>
            </button>
          </div>
        </section>
      </main>
      <footer className="footer-container">
        <img src={aboutDark} alt={"about dark"}></img>
        <article className="about">
          <h2>ABOUT OUR FURNITURE</h2>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </article>
        <img src={aboutLight} alt={"about light"}></img>
      </footer>
    </>
  );
}

export default App;
