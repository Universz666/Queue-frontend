import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { UserOutlined, SettingOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const { SubMenu } = Menu;
const { Sider } = Layout;

function Sidebar() {

  const router = useRouter();

  return (
    <>
      <Layout>
        <Sider
          className="sidebar"
          width={200}
          style={{ backgroundColor: "#fff" }}
        >
          <Menu
            mode="inline"
            style={{
              height: "100%",
              background: "#fff",
              paddingTop: 20,
            }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="ข้อมูลสัมภาษณ์">
              <Menu.Item key="1" onClick={() => router.replace("/dashboard")}>ข้อมูลสัมภาษณ์</Menu.Item>
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
