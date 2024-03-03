import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/auth/Login";
import "./style.css";
import NavbarComponent from "./components/common/Navbar";
import { Container } from "./components/common/Container";

function Home() {
  return (
    <div>
      <NavbarComponent />
      <Container>
        <h1 className="m-5 hover:bg-slate-200">Home Page</h1>
      </Container>
    </div>
  );
}

function About() {
  return (
    <div>
      <NavbarComponent />
      <Container>
        <h1 className="m-5 hover:bg-slate-200">About Page</h1>
      </Container>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <NavbarComponent />
      <Container>
        <h1 className="m-5 hover:bg-slate-200">Contact Page</h1>
      </Container>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
