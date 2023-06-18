import "../StyleModules/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>Website is created with React JS</p>
      <div className="footer-contact-container">
        <p>Taha Sökmen</p>
        <a href="https://tahasokmen.netlify.app/" target="_blank">
          My Personal Website
        </a>
      </div>
    </footer>
  );
}
