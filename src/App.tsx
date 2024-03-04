import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Auth/Login";
import "./style.css";
import { Navbar } from "./components/Common/Navbar";
import { Container } from "./components/Common/ui/Container";
import { Invoice } from "./components/Invoice/Invoice";

function Home() {
  return (
    <div>
      <Navbar />
      <Container>
        <h1 className="m-5 hover:bg-slate-200">Home Page</h1>
      </Container>
    </div>
  );
}

function About() {
  return (
    <div>
      <Navbar />
      <Container>
        <h1 className="m-5 hover:bg-slate-200">About Page</h1>
      </Container>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <Navbar />
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
          <Route path="/new" element={<Invoice />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
