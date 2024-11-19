import { Menu } from 'antd';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    const items = [
        {
            key: '/',
            label: 'About',
        },
        {
            key: '/projects',
            label: 'Projects',
        }
    ];
    const startLocation = useLocation();
    const [current, setCurrent] = useState(startLocation.pathname);
    const onClick = (e) => {
        setCurrent(e.key);
        navigate(e.key);
    };
    return (
        <>
            <Menu onClick={onClick} items={items} selectedKeys={[current]} mode="horizontal" />
        </>
    )
}
export default NavBar;