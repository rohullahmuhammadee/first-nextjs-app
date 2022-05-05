
import styles from '../styles/Home.module.css'
import 'antd/dist/antd.css';
import Link from 'next/link'
import React, { useState } from 'react'
import { Layout, Menu, Button, Modal, Breadcrumb } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import RegistrationForm from '../components/users/RegistrationForm'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import UserDatatable from '../components/users/UserDatatable';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('User Management', 'sub1', <UserOutlined />, [
    getItem('Users', '3'),
    getItem('Roles', '4'),
    getItem('Permissions', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState('');

  const childToParent = (childData) => {
    console.log("yeah boyL  ", childData);
    setData(childData);
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    console.log("from close", childToParent, data);
    console.log("ffewrfwe;   ",data);
    // setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className={styles.logo}> Just started </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link href="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link href="/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<TeamOutlined />}>
            <Link href="/roles">Roles</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<FileOutlined />}>
            <Link href="/permissions">Permissions</Link>
          </Menu.Item>
        </Menu>
        {/* <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline" items={items} /> */}
      </Sider>
      <Layout className="site-layout">
        <Header
          className={styles.white}
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '20px 16px',
          }}
        >
          <Button type="primary" onClick={showModal} shape="round" icon={<DownloadOutlined />}>
            Create User
          </Button>
          <UserDatatable />

          <Modal width={1000} title="Create User" centered={true} okText={"Submit"} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>         
            <RegistrationForm childToParent={childToParent}/>
          </Modal>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}
