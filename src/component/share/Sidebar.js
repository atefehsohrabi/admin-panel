
import { Layout, Menu } from 'antd'
import {
    AppstoreOutlined,
    MenuFoldOutlined,
    MailOutlined, MenuUnfoldOutlined, DashboardOutlined, UserOutlined, 
} from '@ant-design/icons';
import {Link} from 'react-router-dom'
const { Sider } = Layout

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem(<Link to='/'>Dashboard</Link> , 'dashboard', <DashboardOutlined />),
    getItem('User Management', 'users', <UserOutlined />, [
        getItem(<Link to='/person'> User List</Link>, 'User List'),
        getItem(<Link to='/person/new'>User Add</Link>, 'users-add')
    ]),
    getItem('Posts Managment', 'posts', <UserOutlined />, [
        getItem(<Link to='/post'>Post List</Link>, 'posts-list'),
        getItem(<Link to='/post/new'>Post Add</Link>, 'posts-add'),
    ]),
    {
        type: 'divider'
    },
    getItem('Setting', 'settings', <settingsOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12')
    ]),
];

export default function Sidebar() {

    return (
    <Sider>

        <Menu
            defaultSelectedKeys={['dashboard']}
            defaultOpenKeys={['users', 'posts']}
            style={{ width: 200 }}
            mode="inline"
            theme="dark"
            items={items}
        />
    </Sider>)
   
}