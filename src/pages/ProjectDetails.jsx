import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { projects } from '@assets';
import { BadTranslations, NotAllArtists } from './project-writeups';

function ProjectDetails() {
    const { project: path } = useParams();
    const project = projects.find((x) => x.path === path );
    const navigate = useNavigate();
    return (
        <>
        <Button onClick={() => navigate('/projects')}>
            Back to all projects
        </Button>
        {project.path === 'not-all-artists-speak-english' && <NotAllArtists /> }
        {project.path === 'bad-translations' && <BadTranslations />}
        </>
    )
}
export default ProjectDetails;