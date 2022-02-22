import React from "react";
import Layouts from "../../components/Layouts";
import { Box, Flex } from "reflexbox";
import { Input, Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { TextArea } = Input;

function Dashboard() {
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  function handleMenuClick(e) {
    console.log("click", e);
  }

  return (
    <>
      <Layouts>
        <h2 style={{ fontSize: "24px" }}>อาจารย์ผู้สอบสัมภาษณ์</h2>
        <Flex style={{ padding: "0px 0px 0px 20px" }}>
          <Box width={1 / 2}>
            <Flex>
              <Box>
                <p className="font-regist">ชื่อ-นามสกุล :</p>
              </Box>
              <Box width={1 / 2}>
                <Input />
              </Box>
            </Flex>
            <Flex>
              <Box>
                <p className="font-regist">สังกัดคณะ :</p>
              </Box>
              <Box width={1 / 2}>
                <Dropdown overlay={menu}>
                  <Button>
                    สังกัดคณะ <DownOutlined />
                  </Button>
                </Dropdown>
              </Box>
            </Flex>
            <Flex>
              <p className="font-regist">นัดหมายสัมภาษณ์</p>
            </Flex>
            <Flex>
              <TextArea rows={4} placeholder="สามารถวางลิงก์ได้"></TextArea>
            </Flex>
          </Box>
          <Box width={1 / 2}>
            <Flex>
              <Box>
                <p className="font-regist">เบอร์โทรศัพท์ :</p>
              </Box>
              <Box width={1 / 2}>
                <Input />
              </Box>
            </Flex>
            <Flex>
              <Box>
                <p className="font-regist">สาขาวิชา :</p>
              </Box>
              <Box width={1 / 2}>
                <Dropdown overlay={menu}>
                  <Button>
                    สาขาวิชา <DownOutlined />
                  </Button>
                </Dropdown>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Flex className="contentsHome">
          <Button
            className="btn-teacher-save"
            style={{
              fontSize: "24px",
              padding: "0px 50px 35px 50px",
              marginTop: 50,
              borderRadius: "5px",
            }}
          >
            บันทึก
          </Button>
        </Flex>
      </Layouts>
    </>
  );
}

export default Dashboard;
