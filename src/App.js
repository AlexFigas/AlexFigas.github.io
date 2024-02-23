import logo from './logo.svg';
import './App.css';

// Components
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from './components/resume/Resume';
import Sidebar from './components/sidebar/Sidebar';

function App() {
    return (
        <div className="App">
            <Sidebar />
            <main className='main'>
                <Home />
                <About />
                <Resume />
                <Portfolio />
                <Contact />
            </main>
        </div>
    );
}

export default App;
