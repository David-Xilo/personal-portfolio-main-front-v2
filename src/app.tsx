import Navigation from './components/navigation';
import Hero from './components/hero';
import Projects from './components/projects';
import Footer from './components/footer';
import About from "./components/about.tsx";
import Contact from "./components/contact.tsx";
import Section from "./components/section.tsx";

function App() {


    // TODO - add dark mode toggle
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <Navigation/>
            <div id={"hero"}>
                <Hero
                    name="David Moura"
                    role="Senior Software Engineer"
                    description="Specializing in backend development with a passion for building scalable systems across technology, security and finance."
                />
            </div>

            <Section id={'about'} previousSection={'hero'} nextSection={'contact'} Component={About} />

            <Section id={'contact'} previousSection={'about'} nextSection={'work'} Component={Contact} />

            <Section id={'work'} previousSection={'contact'} Component={Projects} />


            <Footer/>
        </div>
    );
}

export default App;
