import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/auth/Login';
import './style.css'

function Home() {
  return <h1 className='m-5 hover:bg-slate-200'>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
