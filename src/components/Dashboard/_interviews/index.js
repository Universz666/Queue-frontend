import React from "react";
import { Input, Card, Divider, Checkbox, Button } from "antd";
import { Box, Flex } from "reflexbox";

const { TextArea } = Input;

function CompInterview() {
  return (
    <Card style={{ width: "100%", height: "calc(100vh - 100px)" }}>
      <p style={{ fontSize: "20px" }}> คิวที่ 1 </p>
      <Flex style={{ marginLeft: 60 }}>
        <Box width={1 / 2}>
          <Flex>
            <p> Full name </p>
          </Flex>
          <Flex>
            <p> Height School </p>
          </Flex>
          <Flex>
            <Box>
              <p> Portfolio : </p>
            </Box>
            <Box style={{ paddingLeft: 5 }}>
              <a>Jamess.pdf</a>
            </Box>
          </Flex>
        </Box>
        <Box width={1 / 2}>
          <Flex>
            <p> Phone Number </p>
          </Flex>
          <Flex>
            <p> Ubonratchathani </p>
          </Flex>
        </Box>
      </Flex>
      <Divider />
      <Flex style={{ marginLeft: 60 }}>
        <Box width={1/2}>
          <Flex>
            <Box style={{ marginRight: 20 }}>
              <p>
                <Checkbox>ผ่าน</Checkbox>
              </p>
            </Box>
            <Box>
              <p>
                <Checkbox>ไม่ผ่าน</Checkbox>
              </p>
            </Box>
          </Flex>
          <Flex>
            <p>หมายเหตุ</p>
          </Flex>
          <Flex>
            <TextArea rows={6}></TextArea>
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
    </Card>
  );
}

export default CompInterview;
