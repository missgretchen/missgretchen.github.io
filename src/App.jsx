import { Home, Projects, ProjectDetails } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:project" element={ <ProjectDetails /> } />
      </Routes>
    </>
  );
}

export default App;
