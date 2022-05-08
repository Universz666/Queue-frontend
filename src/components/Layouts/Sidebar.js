import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { HomeOutlined, SettingOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const { SubMenu } = Menu;
const { Sider } = Layout;

function Sidebar() {

  const router = useRouter();

  return (
    <>
      <Layout style={{height:"100vh"}}>
        <Sider
          className="sidebar"
          style={{ backgroundColor: "#fff",height:"100vh"}}
        >
          <Menu
            mode="inline"
            style={{
              height: "100%",
              background: "#fff",
              paddingTop: 20,
            }}
          >
            <SubMenu key="sub1" icon={<HomeOutlined />} title="หน้าแรก">
              <Menu.Item key="1" onClick={() => router.replace("/")}>ข้อมูลสัมภาษณ์</Menu.Item>
              <Menu.Item key="2" onClick={() => router.replace("/dashboard/interviews")}>คิวสัมภาษณ์</Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" icon={<SettingOutlined />} title=" Dashboard">
              <Menu.Item key="3" onClick={() => router.replace("/dashboard/admin-dashboard")}>Dashboard</Menu.Item>
              <Menu.Item key="4" onClick={() => router.replace("/dashboard/admin-users")}>Users</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </Layout>
    </>
  );
}

export default Sidebar;
