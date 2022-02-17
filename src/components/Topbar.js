import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button, Modal } from "antd";
import { GoogleOutlined } from '@ant-design/icons'
import { Flex, Box } from "reflexbox";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)`
  left: calc(100% - 520px);
  margin: 0 !important;
  top: 0;
  .ant-modal-wrap {
    overflow: hidden !important;
  }
  .ant-modal-content {
    border-radius: 1px;
  }
`;

export default function Topbar({ children }) {
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
                style={{ width: 50, height: 55, margin: 20 }}
              />
              <Box style={{ padding: "40px 15px 0px 0px" }}>
                <h3 style={{ lineHeight: "1px", color: "white" }}>
                  มหาวิทยาลัยอุบลราชธานี
                </h3>
                <p style={{ color: "white" }}>Ubon Ratchathani University</p>
              </Box>
            </Flex>
          </Box>
          <Box width={1 / 2}>
            <Flex justifyContent="end">
              <p
                style={{ padding: "40px 15px 0px 0px", color: "white", cursor: "pointer" }}
                onClick={() => setIsModalVisible(true)}
              >
                <strong>Sign in</strong>
              </p>
            </Flex>
          </Box>
        </Flex>
        <StyledModal
          visible={isModalVisible}
          footer={null}
          onCancel={()=> setIsModalVisible(false)}
        >
          <Button type="primary" icon={<GoogleOutlined />} >Google Authentication</Button>
        </StyledModal>
      </div>
      {children}
    </>
  );
}
