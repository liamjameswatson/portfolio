import AppLayout from "./components/AppLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills/>} />
            <Route path="projects" element={<Projects/>} />
            <Route path="contact" element={<Contact/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;