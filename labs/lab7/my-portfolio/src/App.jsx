import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

function App() {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") ?? "light"
  );

  const handleThemeToggle = () => {
    const updatedTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  useEffect(() => {
    document.body.className = currentTheme;
  }, [currentTheme]);

  return (
    <div className={`app-container ${currentTheme}`}>
      <Header />
      <Container className="mt-4">
        <div className="d-flex justify-content-end mb-3">
          <Button
            variant={currentTheme === "light" ? "dark" : "light"}
            onClick={handleThemeToggle}
          >
            {currentTheme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </Button>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;