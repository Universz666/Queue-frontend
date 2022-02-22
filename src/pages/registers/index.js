import React from "react";

import { useRouter } from "next/router";
import Landing from "../../components/LayoutsLanding";
import { Box, Flex } from "reflexbox";
import { Input, Button, Dropdown, message, Menu } from "antd";
import {
  CloudUploadOutlined,
  NotificationOutlined,
  DownOutlined,
} from "@ant-design/icons";

function RegisterDesktop() {
  const router = useRouter();

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
      <Landing>
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

          <div className="site-content">
            <Flex className="contentsHome" style={{ margin: 20 }}>
              <p className="font-regist">ลงทะเบียน</p>
            </Flex>
            <Flex flexDirection="column">
              <Flex>
                <Box width={1/2}>
                <Flex className="input-regist" justifyContent="end">
                  <Box>
                    <p className="font-regist">ชื่อ-นามสกุล :</p>
                  </Box>
                  <Box>
                    <Input allowClear onChange={onChange} />
                  </Box>
                </Flex>
                </Box>
                <Box width={1/2}>
                <Flex className="input-regist" justifyContent="start" style={{marginLeft:"40px"}}>
                  <Box >
                    <p className="font-regist">โรงเรียน :</p>
                  </Box>
                  <Box >
                    <Input allowClear onChange={onChange} />
                  </Box>
                </Flex>
                </Box>
              </Flex>

              <Flex>
                <Box width={1/2}> 
                <Flex className="input-regist" justifyContent="end">
                  <Box>
                    <p className="font-regist">เบอร์โทรศัพท์ :</p>
                  </Box>
                  <Box>
                    <Input allowClear onChange={onChange} />
                  </Box>
                </Flex>
                </Box>
                <Box width={1/2}>
                <Flex className="input-regist" justifyContent="start" style={{marginLeft:"40px"}}>
                  <Box>
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
                  </Box>
                </Flex>
                </Box>
              </Flex>
              <Flex>
                <Box width={1/2}>
                <Flex className="input-regist" justifyContent="end">
                  <Box>
                    <p className="font-regist">จังหวัด :</p>
                  </Box>
                  <Box>
                    <Input allowClear onChange={onChange} />
                  </Box>
                </Flex>
                </Box>
                <Box width={1/2}>
                <Flex className="input-regist" justifyContent="start" style={{marginLeft:"40px"}}>
                  <Box width={1/2}>
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
                  </Box>
                </Flex>
                </Box>
              </Flex>
            </Flex>

            {/* -------------------------------Faculty/Department----------------------- */}

            <Flex className="contentsHome" style={{ marginTop: 40 }}>
              <p className="font-regist">คณะ/สาขาวิชาที่เข้าสัมภาษณ์</p>
            </Flex>
            <Flex className="contentsHome" style={{ margin: 10 }}>
              <Dropdown overlay={faculty}>
                <Button
                  style={{ fontSize: "18px", padding: "0px 150px 0px 150px" }}
                >
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
                  cursor: "pointer",
                }}
                onClick={() => router.replace("/qDisplay")}
              >
                ยืนยันการลงทะเบียน
              </Button>
            </Flex>
          </div>
        </div>
      </Landing>
    </>
  );
}

export default RegisterDesktop;
