const Footer = () => {
  return (
    <footer>
      <p>Made by Pratik Devle</p>
      <div className="footer-links">
        <a href="https://github.com/Pratik1005">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/pratik-devle-296184160">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://twitter.com/DevlePratik">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} FinQuiz</p>
    </footer>
  );
};

export {Footer};
