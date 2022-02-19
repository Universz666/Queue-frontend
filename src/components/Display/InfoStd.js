import { Card } from "antd";
import React from "react";
import { Flex, Box } from "reflexbox";

function InfoStd() {
  return (
    <div className="site-content">
      <Flex style={{ marginTop: 40}}>
          <Card>
            <p>คณะวิทยาศาสตร์ สาขาวิทยาการข้อมูลและนวัตกรรมซอฟต์แวร์</p>
            <Box style={{ margin: 20 }}>
              <h3>เข้าสอบสัมภาษณ์ในรูปแบบออนไลน์</h3>
              <Flex>
                <a> https://meet.google.com </a>
              </Flex>
            </Box>
          </Card>
      </Flex>
    </div>
  );
}

export default InfoStd;
