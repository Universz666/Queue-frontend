import React from "react";
import Topbar from "../../components/Topbar";
import { Box, Flex } from "reflexbox";
import { Input, Button, Dropdown, message, Menu } from "antd";
import {
  CloudUploadOutlined,
  NotificationOutlined,
  DownOutlined,
} from "@ant-design/icons";

function RegisterDesktop() {
  const onChange = (e) => {
    console.log(e);
  };

  function handleMenuClick(e) {
    message.info("Click on item");
    console.log("clicked", e);
  }

  const faculty = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">SCI</Menu.Item>
      <Menu.Item key="2">BUS</Menu.Item>
      <Menu.Item key="3">ENG</Menu.Item>
      <Menu.Item key="4">AGI</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Topbar>
        <div className="container">
          <Flex>
            <Box
              style={{
                padding: "10px 20px 0px 50px",
                fontSize: "24px",
                color: "#4B4B4B",
              }}
            >
              <p>งานสัมภาษณ์เข้าศึกษาต่อมหาวิทยาลัยอุบลราชธานี</p>
            </Box>
          </Flex>

          {/* --------------------------------------register------------------ */}

          <div className="site-content" >
            <Flex className="contentsHome" style={{margin:20}}>
              <p className="font-regist">ลงทะเบียน</p>
            </Flex>
            <Flex className="contentsHome">
              <Box style={{ padding: "0px 50px 0px 0px" }}>
                <Flex className="input-regist">
                  <Box>
                    <p className="font-regist">ชื่อ-นามสกุล :</p>
                  </Box>
                  <Box>
                    <Input allowClear onChange={onChange} />
                  </Box>
                </Flex>
              </Box>
              <Box>
                <Flex className="input-regist">
                  <Box>
                    <p className="font-regist">โรงเรียน :</p>
                  </Box>
                  <Box>
                    <Input allowClear onChange={onChange} />
                  </Box>
                </Flex>
              </Box>
            </Flex>
            <Flex className="contentsHome">
              <Box style={{ padding: "10px 110px 0px 0px" }}>
                <Flex className="input-regist">
                  <Box>
                    <p className="font-regist">เบอร์โทรศัพท์ :</p>
                  </Box>
                  <Box>
                    <Input allowClear onChange={onChange} />
                  </Box>
                </Flex>
              </Box>
              <Box>
                <Flex
                  className="input-regist"
                  style={{ padding: "0px 50px 5px 0px" }}
                >
                  <Button
                    className="btn-login"
                    style={{
                      fontSize: "18px",
                      borderRadius: "5px",
                      padding: "0px 10px 0px 10px",
                    }}
                  >
                    <CloudUploadOutlined />
                    อัพโหลดไฟล์ Portfolio
                  </Button>
                </Flex>
              </Box>
            </Flex>
            <Flex className="contentsHome">
              <Box style={{ padding: "10px 110px 0px 0px" }}>
                <Flex className="input-regist">
                  <Box>
                    <p className="font-regist">จังหวัด :</p>
                  </Box>
                  <Box>
                    <Input allowClear onChange={onChange} />
                  </Box>
                </Flex>
              </Box>
              <Box>
                <Flex
                  className="input-regist"
                  style={{ padding: "0px 6px 5px 0px" }}
                >
                  <Button
                    className="btn-line"
                    style={{
                      fontSize: "18px",
                      borderRadius: "5px",
                      padding: "0px 15px 0px 15px",
                    }}
                  >
                    <NotificationOutlined />
                    รับแจ้งเตือนผ่าน LINE
                  </Button>
                </Flex>
              </Box>
            </Flex>

            {/* -------------------------------Faculty/Department----------------------- */}

            <Flex className="contentsHome" style={{ marginTop: 40 }}>
              <p className="font-regist">คณะ/สาขาวิชาที่เข้าสัมภาษณ์</p>
            </Flex>
            <Flex className="contentsHome" style={{ margin: 10 }}>
              <Dropdown overlay={faculty}>
                <Button style={{ fontSize: "18px", padding: "0px 150px 0px 150px" }}>
                  คณะ <DownOutlined />
                </Button>
              </Dropdown>
            </Flex>
            <Flex className="contentsHome" style={{ marginBottom: 30 }}>
              <Dropdown overlay={faculty}>
                <Button
                  style={{ fontSize: "18px", padding: "0px 150px 0px 150px" }}
                >
                  สาขา <DownOutlined />
                </Button>
              </Dropdown>
            </Flex>

            {/* ---------------------------Submit-------------------------- */}

            <Flex className="contentsHome">
              <Button
                className="ant-btn-primary"
                style={{
                  fontSize: "18px",
                  borderRadius: "5px",
                  padding: "0px 20px 0px 20px",
                }}
              >
                ยืนยันการลงทะเบียน
              </Button>
            </Flex>
          </div>
        </div>
      </Topbar>
    </>
  );
}

export default RegisterDesktop;
