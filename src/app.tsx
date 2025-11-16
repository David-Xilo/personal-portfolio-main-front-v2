import Navigation from './components/navigation';
import Hero from './components/hero';
import Projects from './components/projects';
import Footer from './components/footer';
import About from "./components/about.tsx";
import Contact from "./components/contact.tsx";

function App() {


    // TODO - add dark mode toggle
    return (
        <div className="min-h-screen">
            <Navigation/>
            <div id={"hero"}>
                <Hero
                    name="David Moura"
                    role="Senior Software Engineer"
                    description="Specializing in backend development with a passion for building scalable systems across technology, security and finance."
                />
            </div>

            <div id="about">
                <About/>
            </div>

            <div id="contact">
                <Contact/>
            </div>

            <div id="work">
                <Projects />
            </div>


            <Footer/>
        </div>
    );
}

export default App;
