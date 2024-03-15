import { FaWhatsapp } from "react-icons/fa";
import "./App.css";

const App = () => (
  <>
    <div className="header-container">
      <div className="banner-container">
        <div className="content-container">
          <h1 className="title">Mobishaala</h1>
          <p className="description">
            Create your{" "}
            <span className="highlight-text">Digital Classroom</span> in 5 mins
            for <span className="highlight-text">FREE</span> & connect to 1+
            Million Students.
          </p>
          <ul className="list-container">
            <li className="list-item">No technical knowledge required.</li>
            <li className="list-item">
              Quickly setup live class, tests, notes, ebooks and more.
            </li>
            <li className="list-item">
              Reach out to millions of students anywhere, anytime.
            </li>
          </ul>
          <div className="video-placeholder-mobile">
            <iframe
              title="video"
              className="yt-video"
              src="https://www.youtube.com/embed/jg5d59ligW4?rel=0"
            ></iframe>
            <button className="cta-button">Buy</button>
          </div>
          <div className="cta-container">
            <p className="label">Institute/Teacher</p>
            <button className="cta-button">Get Started</button>
            <p className="label">Student</p>
            <button className="cta-button">Download App</button>
            <br />
            <button className="cta-button talk-to-us-button">
              <FaWhatsapp size="25" />
              <sapn className="talk-to-us-text">Talk to Us</sapn>
            </button>
          </div>
        </div>
        <div className="video-placeholder-desktop">
          <iframe
            title="video"
            className="yt-video"
            src="https://www.youtube.com/embed/jg5d59ligW4?rel=0"
          ></iframe>
          <button className="cta-button">Buy</button>
        </div>
      </div>
    </div>
    <div className="footer-container">
      <h1 className="footer-heading">Mobishaala</h1>
      <h1 className="footer-sub-heading">Vision</h1>
      <p className="footer-content">
        Empower Institutions & Teachers with state of the art digital classroom
        Technology.
      </p>
      <h1 className="footer-sub-heading">Address</h1>
      <p className="footer-content">
        <span className="office-text">Registered Office : </span>804, 5th Cross,
        9th main, 4th Block Koramangala, Bangalore, Karnataka 560034
      </p>
      <p className="footer-content">
        <span className="office-text">Corporate Office : </span>293, Westend
        Marg, near Saket, Saidulajab, Saket, New Delhi, 110030
      </p>
      <h1 className="footer-sub-heading">Quick Links</h1>
      <p className="footer-content">Blog</p>
      <p className="footer-content">Android App</p>
      <p className="footer-content">IOS App</p>
    </div>
  </>
);
export default App;
