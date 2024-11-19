import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
const ProjectCard = ({
    title,
    subtitle,
    path,
    imagePath,

}) => {
    const { Meta } = Card;
    const navigate = useNavigate();
    return (
        <>
        <Card hoverable onClick={() => navigate(`/projects/${path}`)}>
            <Meta title={title} description={subtitle} />
            Put image here
        </Card>
        </>
    )
}
export default ProjectCard;