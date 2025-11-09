// import { useState, useEffect } from 'react';
import Navigation from './components/navigation';
import Hero from './components/hero';
import Projects from './components/projects';
import Footer from './components/footer';
// import { api } from './api/api';
// import type { Project, Contact } from './types';

function App() {
  // const [projects, setProjects] = useState<Project[]>([]);
  // const [contact, setContact] = useState<Contact | null>(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const [projectsData, contactData] = await Promise.all([
  //         api.getProjects(),
  //         api.getContact()
  //       ]);
  //       setProjects(projectsData);
  //       setContact(contactData);
  //     } catch (err) {
  //       setError(err instanceof Error ? err.message : 'Failed to load data');
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //
  //   fetchData();
  // }, []);

  // if (1) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="text-gray-600">Loading...</div>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="text-red-600">Error: {error}</div>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen">
      <Navigation />
        <Hero
            name="David Moura"
            role="Senior Software Engineer"
            description="Specializing in backend development with a passion for building scalable systems across technology, gaming, and finance."
            // contact={contact}
        />
      {/*{contact && (*/}
      {/*  <Hero*/}
      {/*    name="David Moura"*/}
      {/*    role="Senior Software Engineer"*/}
      {/*    description="Specializing in backend development with a passion for building scalable systems across technology, gaming, and finance."*/}
      {/*    contact={contact}*/}
      {/*  />*/}
      {/*)}*/}
      
      <div id="work">
        <Projects
            // projects={projects}
        />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
