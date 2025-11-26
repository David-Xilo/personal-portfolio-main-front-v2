import Navigation from './components/general/navigation.tsx';
import Hero from './components/section/contact/hero.tsx';
import Projects from './components/section/work/projects.tsx';
import Footer from './components/general/footer.tsx';
import About from "./components/section/about/about.tsx";
import Contact from "./components/section/contact/contact.tsx";
import Section from "./components/section/section.tsx";
import {ContactProvider} from "./components/section/contact/contact_provider.tsx";

function App() {

    return (
        <ContactProvider>
            <div className="min-h-screen bg-white dark:bg-gray-950">
                <Navigation/>
                <div id={"hero"}>
                    <Hero
                        name="David Moura"
                        role="Senior Software Engineer"
                        description="Building secure, scalable systems at the intersection of technology, security and finance"
                    />
                </div>
                <Section id={'about'} previousSection={'hero'} nextSection={'contact'} Component={About}/>
                <Section id={'contact'} previousSection={'about'} nextSection={'work'} Component={Contact}/>
                <Section id={'work'} previousSection={'contact'} Component={Projects}/>
                <Footer/>
            </div>
        </ContactProvider>
    );
}

export default App;
