import "./App.css";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import { useState } from "react";
function App() {
    const [page, setPage] = useState("projects");
    const RenderPage = () => {
        if (page === "projects") {
            return <Projects />;
        } else if (page === "skills") {
            return <Skills />;
        } else if (page === "services") {
            return <Services />;
        }
    };
    return (
        <div className="App">
            <Landing />
            <Navbar page={page} setPage={setPage} />
            <RenderPage />
            <Footer />
        </div>
    );
}

export default App;
