import React from "react";
import Topbar from "../../components/Topbar";
import { Flex, Box } from "reflexbox";
import { Card } from "antd";
import InfoStd from "../../components/Display/InfoStd";

function qDisplay() {
  return (
    <>
      <Topbar>
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

        <div className="site-content">
          <Flex>
            <Box width={1 / 3}>
              <Flex className="contentsHome">
                <Card
                  className="card-box-q"
                  style={{ backgroundColor: "#0B3B7D" }}
                >
                  <p>ผู้เข้าสัมภาษณ์ทั้งหมด</p>
                  <p className="txt-q">01</p>
                </Card>
              </Flex>
            </Box>
            <Box width={1 / 3}>
              <Flex className="contentsHome">
                <Card
                  className="card-box-q"
                  style={{ backgroundColor: "#4CAF50" }}
                >
                  <p>คิวที่กำลังสัมภาษณ์</p>
                  <p className="txt-q">01</p>
                </Card>
              </Flex>
              <Flex className="contentsHome">
                <Card
                  className="card-box-q"
                  style={{ backgroundColor: "#4CAF50", height:"150px" }}
                >
                  <p>19 Feb 2022</p>
                  <p style={{ fontSize: "36px"}}>02:30:41</p>
                </Card>
              </Flex>
            </Box>
            <Box width={1 / 3}>
              <Flex className="contentsHome">
                <Card
                  className="card-box-q"
                  style={{ backgroundColor: "#E7B400" }}
                >
                  <p>คิวของคุณ</p>
                  <p className="txt-q">01</p>
                </Card>
              </Flex>
            </Box>
          </Flex>
          <Flex>
            <InfoStd />
          </Flex>
        </div>
      </Topbar>
    </>
  );
}

export default qDisplay;
