import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button, Divider, Input, Modal } from "antd";
import { MailOutlined, KeyOutlined } from "@ant-design/icons";
import { Flex, Box } from "reflexbox";
import styled from "@emotion/styled";


const StyledModal = styled(Modal)`
  position: fixed;
  width: 600px;
  top: 300px;
  left: calc(50% - 250px);
  bottom: 40px;
  z-index: 100;
  .ant-modal-wrap {
    overflow: hidden !important;
  }
  .ant-modal-content {
    border-radius: 5px;
  }
`;

export default function Topbar() {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <div className="layouts">
        <Flex>
          <Box width={1 / 2}>
            <Flex
              style={{ cursor: "pointer" }}
              onClick={() => router.replace("/")}
            >
              <img
                src="/assets/Logoubu.png"
                style={{ width: 60, height: 65, margin: "20px 20px 20px 50px" }}
              />
              <Box style={{ padding: "40px 15px 0px 0px" }}>
                <h3 style={{ lineHeight: "1px", color: "#FFF", fontSize:"24px" }}>
                  มหาวิทยาลัยอุบลราชธานี
                </h3>
                <p style={{ color: "#FFF",  fontSize:"20px" }}>Ubon Ratchathani University</p>
              </Box>
            </Flex>
          </Box>
          <Box width={1 / 2}>
            <Flex justifyContent="end">
              <p
                style={{
                  padding: "40px 50px 0px 0px",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "20px"
                }}
                onClick={() => setIsModalVisible(true)}
              >
                เข้าสู่ระบบ
              </p>
            </Flex>
          </Box>
        </Flex>

        {/* ---------------- Login ------------------- */}

        <StyledModal
          visible={isModalVisible}
          footer={null}
          onCancel={() => setIsModalVisible(false)}
        >
          <Flex className="contentsHome">
            <p style={{ fontSize: "24px", color: "#4B4B4B" }}>
              เข้าใช้งานระบบด้วย
            </p>
          </Flex>
          <Flex className="input-box-login">
            <Input
              size="middle"
              placeholder="Email"
              prefix={<MailOutlined style={{ color: "#4B4B4B", margin: 5 }} />}
            />
          </Flex>
          <Flex className="input-box-login">
            <Input.Password
              size="middle"
              placeholder="Password"
              prefix={<KeyOutlined style={{ color: "#4B4B4B", margin: 5 }} />}
            />
          </Flex>
          <Flex className="contentsHome">
            <Divider> OR </Divider>
          </Flex>
          <Flex
            className="contentsHome"
            style={{ padding: "10px 10px 10px 10px" }}
          >
            <Button className="btn-login-google">
              <img
                src="/assets/google-auth.png"
                style={{ width: 15, margin: "3px 5px 5px 0px" }}
              />
              | Google Authentication
            </Button>
          </Flex>
          <Flex
            className="contentsHome"
            style={{ margin: "20px 0px 20px 0px" }}
          >
            <Button
              className="btn-login"
              style={{ padding: "0px 78px 0px 78px" }}
            >
              เข้าสู่ระบบ
            </Button>
          </Flex>
        </StyledModal>
      </div>
    </>
  );
}
