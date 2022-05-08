import { React, useState, useEffect } from "react";
import Landing from "../../components/LayoutsLanding";
import { Flex, Box } from "reflexbox";
import { Card, Col, Row, Divider, Input, Button } from "antd";

import InfoStd from "../../components/Display/InfoStd";

function qDisplay() {
  const [messages, setMessages] = useState();
  const [showTxt, setShowTxt] = useState("");

  let ws = null;

  useEffect(() => {
    ws = new WebSocket("ws://localhost:8000/ws");
    let num = 1;
    setInterval(async () => {
      console.log("Interva");
      ws.send("JAMES");
      console.log("test send");
      await onmeaage();
    }, 3000);
  }, []);

  const onmeaage = () => {
    ws.onmessage = (event) => {
      console.log("xx");
      setShowTxt(event?.data);
      console.log("WebSocket message received:", event.data);
    };
  };

  console.log(messages);

  return (
    <>
      <Landing>
        <Flex style={{ background: "#F6F6F6" }}>
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

        <div className="site-card-border-less-wrapper">
          <Row justify="center">
            <Col xs={{ span: 24 }} md={{ span: 8 }} lg={{ span: 6 }}>
              <Flex className="contentsHome">
                <Card
                  className="card-box-q"
                  style={{ backgroundColor: "#0B3B7D", margin: 20 }}
                >
                  <p>ผู้เข้าสัมภาษณ์ทั้งหมด</p>
                  <p className="txt-q">01</p>
                </Card>
              </Flex>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 8 }} lg={{ span: 6 }}>
              <Flex className="contentsHome">
                <Card
                  className="card-box-q"
                  style={{ backgroundColor: "#4CAF50", margin: 20 }}
                >
                  <p>คิวที่กำลังสัมภาษณ์</p>
                  <p className="txt-q">01</p>
                </Card>
              </Flex>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 8 }} lg={{ span: 6 }}>
              <Flex className="contentsHome">
                <Card
                  className="card-box-q"
                  style={{ backgroundColor: "#E7B400", margin: 20 }}
                >
                  <p>คิวของคุณ</p>
                  <p className="txt-q">01</p>
                  <Divider style={{ backgroundColor: "#fff" }} />
                  <p>19 Feb 2022</p>
                  <p style={{ fontSize: "28px" }}>02:30:41</p>
                  <p>เวลาที่รอโดยประมาณ</p>
                </Card>
              </Flex>
            </Col>
          </Row>
        </div>
        <div className="contentsHome">
          <Flex>
            <Box width={1 / 2}>
              <h2>Test</h2>
              <Box>
                <Input onChange={(e) => setMessage(e.target.value)} />
                <Button>Send</Button>
              </Box>
              <Box>
                <p>{showTxt}</p>
              </Box>
            </Box>
          </Flex>
          <Flex>
            <p></p>
          </Flex>
        </div>
      </Landing>
    </>
  );
}

export default qDisplay;
