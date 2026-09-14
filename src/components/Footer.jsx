import { GithubIcon, TwitterIcon, LinkedinIcon } from './icons.jsx'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <span className="brand-mark">DS</span>
              Dev Stack
            </a>
            <p>
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="GitHub"><GithubIcon /></a>
              <a href="#" aria-label="Twitter"><TwitterIcon /></a>
              <a href="#" aria-label="LinkedIn"><LinkedinIcon /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#technologies">Technologies</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Dev Stack. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
