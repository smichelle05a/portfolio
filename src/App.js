import './styles/App.css';

function App() {
  return (
    <div className="vh-100 d-flex fd-col fs-14">
      <nav className="bg-primary col-12 color-light">
        Navbar
      </nav>
      <main className="bg-primary-lighter grow-1">
        Content
      </main>
      <footer className="bg-primary color-light">
        Footer
      </footer>
    </div>
  );
}

export default App;
